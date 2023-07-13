import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const oauthoptions = {
  providers: [
    GoogleProvider({
      clientId: "642100671470-ak2j7qr6902dt7qqc6b34net3vl5o90p.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "29ca920f815f08d9720d32331128ec60",
};

const authhandler = NextAuth(oauthoptions);
export { authhandler as GET, authhandler as POST };
