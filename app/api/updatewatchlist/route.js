import clientPromise from "./../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function handler(request) {
  const { coin, user } = await request.json();
  const client = await clientPromise;
  const db = await client.db();
  const collection = await db.collection("users");
  const result = await collection.updateOne(
    { email: user.email },
    { $addToSet: { watchlist: coin } }
  );
  if (result.modifiedCount === 0) {
    await collection.updateOne(
      { email: user.email },
      { $pull: { watchlist: coin } }
    );
  }
  const updatedUser = await collection.findOne({ email: user.email });
  return new Response(JSON.stringify(updatedUser.watchlist));
}

export { handler as GET, handler as POST };
