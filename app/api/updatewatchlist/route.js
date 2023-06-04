import clientPromise from "./../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function handler(request) {
  
  const { coin, user } = await request.json();
  //conectate a la base de datos y actualizala
  const client = await clientPromise;
  const db = await client.db();
  const collection = await db.collection("users");
  //añade a la collection users el campo watchlist con el valor coin
  const result = await collection.updateOne(
    { email: user.email },
    { $addToSet: { watchlist: coin } }
  );
  //si ya existe el coin en la watchlist, lo elimina
  if (result.modifiedCount === 0) {
    await collection.updateOne(
      { email: user.email },
      { $pull: { watchlist: coin } }
    );
  }
  //devuelve toda la watchlist del usuario actualizada
  const updatedUser = await collection.findOne({ email: user.email });
  return new Response(JSON.stringify(updatedUser.watchlist));




 
}

export { handler as GET, handler as POST };
