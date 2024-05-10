import { AuthOptions, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import Auth0Provider from "next-auth/providers/auth0";

const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_URL!,
    }),
  ],
  secret: process.env.AUTH_SECRET!,
  callbacks: {
    jwt({ token, user, account }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }

      if (account) {
        token.access_token = account.access_token;
      }

      return token;
    },
    session({ session, token }) {
      session.access_token = token.access_token;
      session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default authOptions;

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token?: string;
    user: {
      id?: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id?: string;
    access_token?: string;
  }
}
