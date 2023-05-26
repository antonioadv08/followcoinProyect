"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ScaleLoader } from "react-spinners";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Chart from "./chart";

function coinDetail({ coin }) {
  const [coinInfo, setCoinInfo] = useState(null);
  const [historicalPrices, setHistoricalPrices] = useState(null);

  const setData = useCallback(async () => {
    try {
      const res = await fetch(`/api/getCoin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coin: coin }),
      });

      const data = await res.json();
      setCoinInfo(data.data[coin][0]);
    } catch (e) {
      console.log(e.message);
    }
  }, [coin]);

  const getHistoricalPrices = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=${coin}USDT&interval=1d&limit=1000`
      );

      const data = await res.json();
      setHistoricalPrices(data);
    } catch (e) {
      console.log(e.message);
    }
  }, [coin]);

  useEffect(() => {
    setData();
    getHistoricalPrices();
  }, [coin, setData]);

  return (
    <div className="text-white">
      coinDetail
      {coinInfo ? (
        <div>
          <h1>{coinInfo.description}</h1>

          <Image src={coinInfo.logo} alt="coin logo" width={64} height={64} />
        </div>
      ) : (
        <ScaleLoader color="#36d7b7" />
      )}
      {historicalPrices ? (
        <div>
          <h1>Historical Prices</h1>
          <Chart historicalPrices={historicalPrices}/>
        </div>
      ) : (
        <ScaleLoader color="#36d7b7" />
      )}
    </div>
  );
}

export default coinDetail;
