import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Auth0 from 'next-auth/providers/auth0';
import { getCustomerByEmail } from './src/features/customer/useGetCustomerByEmail';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Auth0({
      issuer: process.env.AUTH_AUTH0_ISSUER,
      token: {
        params: {
          audience: encodeURI(process.env.AUTH_AUTH0_AUDIENCE as string),
        },
      },
      authorization: {
        params: {
          scope: process.env.AUTH_AUTH0_SCOPE,
          audience: encodeURI(process.env.AUTH_AUTH0_AUDIENCE as string),
        },
      },
      // You can also make calls to external resources if necessary.
      async profile(profile) {
        let returns = { ...profile };
        const { data } = await getCustomerByEmail(profile.email);
        if (data?.getCustomerByEmail) {
          returns = {
            ...returns,
            ...data?.getCustomerByEmail,
            customer_id: data?.getCustomerByEmail?.id,
          };
        }
        return returns;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account, profile }) {
      if (account) {
        token.access_token = account.access_token;
      }

      if (profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.picture = profile.picture;
        token.admin = profile.userRoles?.includes('Admin') || false;
      }

      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.customer_id = user.customer_id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.displayName = user.displayName;
      }
      return token;
    },
    session({ session, token }) {
      session.access_token = token.access_token;
      session.user.id = token.sub!;
      session.user.customer_id = token.customer_id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.displayName = token.displayName;
      session.admin = token.admin || false;
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
    customer_id?: string;
    access_token?: string;
    admin: boolean;
    idToken?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
  }
}

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token?: string;
    admin: boolean;
  }

  interface Profile {
    userRoles?: string[];
    customer_id?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
  }

  interface User {
    customer_id?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
  }
}
