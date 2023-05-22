"use client";
import CMCtable from "@/components/cmc-table/cmcTable";
import { CoinMarketProvider } from "@/context/context";

//traer el contexto

export default function Home() {
  return (
    <>
        <CMCtable />
    </>
  );
}
