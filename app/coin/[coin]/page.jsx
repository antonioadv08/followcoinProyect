"use client";
import Link from "next/link";
import CoinDetail from "@/components/coinDetail";
import "tailwindcss/tailwind.css";

async function coin({ params }) {
  return (
    <div>
      <Link href="/" className="text-white">
        Volver
      </Link>
      <CoinDetail coin={params.coin} />
    </div>
  );
}

export default coin;
