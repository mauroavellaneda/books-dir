import NextAuth from "next-auth";

export const { getSession } = NextAuth({
  providers: [GitHub],
});
