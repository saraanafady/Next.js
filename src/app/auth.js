
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
 
export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })

  ],
})