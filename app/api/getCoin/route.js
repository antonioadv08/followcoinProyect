import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const {coin} = await request.json();
  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&symbol=${coin}`
  );
  const data = await response.json();


  return NextResponse.json({ data:data.data });
}

