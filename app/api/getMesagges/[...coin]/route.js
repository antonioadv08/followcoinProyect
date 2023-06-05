import clientPromise from "./../../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
  console.log("GET");
  const coin = context.params.coin[0];

  //conectate a la base de datos y actualizala
  const client = await clientPromise;
  const db = await client.db();
  //devuelve los mensajes del chat actualizados
  const updatedChat = await db.collection("chats").findOne({ name: coin });

  return new Response(JSON.stringify(updatedChat.messages));
}
