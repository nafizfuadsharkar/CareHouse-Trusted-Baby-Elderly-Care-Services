import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"; // use bcryptjs instead of bcrypt
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Connect to DB
        const userCollection = await dbConnect("users");
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          return null; // user not found
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) {
          return null; // wrong password
        }

        // ✅ Return user object on success
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const users = await dbConnect("users");
      const isUserExist = await users.findOne({ email: user.email });
      if (!isUserExist) {
        await users.insertOne({
          name: user.name,
          email: user.email,
          image: user.image,
          role: "user",
        });
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      // store user id from authorize() in token
      if (user?.id) token.id = user.id;
      if (user?.role) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      if (token?.id) session.user.id = token.id; // <-- important!
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
