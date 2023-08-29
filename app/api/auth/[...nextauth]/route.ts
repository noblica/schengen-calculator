import { authOptions } from "@/app/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
