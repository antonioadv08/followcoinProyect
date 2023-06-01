"use client";
import React, { useEffect, useContext } from "react";
import { CoinMarketContext } from "../../context/context";
import { useRouter } from "next/navigation";

function route() {
  let { getCoins, user } = useContext(CoinMarketContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);
  return <div>route</div>;
}

export default route;
