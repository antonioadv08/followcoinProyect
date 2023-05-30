import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import InstagramProvider from "next-auth/providers/instagram";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    LinkedinProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0",
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_ID,
      clientSecret: process.env.INSTAGRAM_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),

  database: process.env.DATABASE_URL,
});

export { handler as GET, handler as POST };
