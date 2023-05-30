import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&limit=20`,
    {
      method: "GET",
      headers: {
        Accept: "*/*",
        cache: "no-store",
      },
      cache: "no-store",
    }
  );
  const data = await response.json();

  return NextResponse.json({ data });
}
