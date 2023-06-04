import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {   
  const {coin} = await request.json();
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_DATA_API_KEY}&q=${coin}&language=en&country=us`
  );
  const data = await response.json();


  return NextResponse.json({ data:data.results});
}


