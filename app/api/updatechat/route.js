import clientPromise from "./../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const { coin, message } = await request.json();
  const client = await clientPromise;
  const db = await client.db();
  const collectionExists = await db
    .listCollections({ name: "chats" })
    .hasNext();
  if (!collectionExists) {
    await db.createCollection("chats");
  }
  const chatExists = await db
    .collection("chats")
    .find({ name: coin })
    .hasNext();
  if (!chatExists) {
    await db.collection("chats").insertOne({ name: coin, messages: [] });
  }
  await db
    .collection("chats")
    .updateOne(
      { name: coin },
      { $addToSet: { messages: { body: message.body, from: message.from } } }
    );
  const updatedChat = await db.collection("chats").findOne({ name: coin });
  return new Response(JSON.stringify(updatedChat.messages));
}
