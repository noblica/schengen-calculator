import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { ensureUser } from "./signin/ensureUser";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async jwt({token}) {
      if (token.email) {
        const userData = await ensureUser(token.email);
        token.userId = userData.id
        return token;
      }
      return token;
    },
    async session({session, token}) {
      session.user.id = token.userId as number
      return session
    }
  },
}