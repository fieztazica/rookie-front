import Auth0Provider from "next-auth/providers/auth0";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    Auth0Provider({
      clientId: process.env.AUTH_CLIENT_ID!,
      clientSecret: process.env.AUTH_CLIENT_SECRET!,
      issuer: process.env.AUTH_ISSUER_URL!,
    }),
  ],
  secret: process.env.AUTH_SECRET!,
};

export default authOptions;
