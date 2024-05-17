import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Auth0 from 'next-auth/providers/auth0';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Auth0({
      issuer: process.env.AUTH_AUTH0_ISSUER,
      authorization: { params: { scope: process.env.AUTH_AUTH0_SCOPE } },
      // You can also make calls to external resources if necessary.
      async profile(profile) {
        // console.log(profile);
        return {};
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account, profile }) {
      if (profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.picture = profile.picture;
      }

      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }

      if (account) {
        token.access_token = account.access_token;
      }

      return token;
    },
    session({ session, token, user }) {
      session.access_token = token.access_token;
      session.user.id = token.sub!;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id?: string;
    access_token?: string;
  }
}

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token?: string;
  }
}
