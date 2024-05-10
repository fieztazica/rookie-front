import NextAuth from "next-auth/next";
import authOptions from "./options";

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
