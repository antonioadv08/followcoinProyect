"use client";
import Link from "next/link";
import CoinDetail from "@/components/coinDetail";
import "tailwindcss/tailwind.css";

async function coin({ params }) {
  return (
    <div>
      <CoinDetail coin={params.coin} />
    </div>
  );
}

export default coin;
