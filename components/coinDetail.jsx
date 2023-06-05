import React, { useEffect, useState, useCallback, useContext } from "react";
import { ScaleLoader } from "react-spinners";
import Image from "next/image";
import Chart from "./chart";
import Chat from "./chat";
import News from "./news";
import { CoinMarketContext } from "../context/context";
import Link from "next/link";

function CoinDetail({ coin }) {
  const [coinInfo, setCoinInfo] = useState(null);
  const [historicalPrices, setHistoricalPrices] = useState(null);

  const { user } = useContext(CoinMarketContext);

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
    if (coin) {
      setData();
    }
    getHistoricalPrices();
  }, [coin, setData]);

  console.log(coinInfo);

  return (
    <div>
      {coinInfo ? (
        <div className="flex items-center">
          <div className="w-64">
            <Image src={coinInfo.logo} alt="coin logo" width={64} height={64} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">{coinInfo.name}</h1>
            <p className="text-gray-400">{coinInfo.description}</p>
            <Link href={coinInfo.urls.website}>
              <p className="text-gray-400">
                For more information click {coinInfo.urls.website}
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <ScaleLoader color="#36d7b7" />
      )}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 p-2">
          {historicalPrices ? (
            <div>
              <h1 className="text-2xl font-bold text-white text-center">
                Historical Prices
              </h1>
              <Chart historicalPrices={historicalPrices} />
            </div>
          ) : (
            <ScaleLoader color="#36d7b7" />
          )}
        </div>
        <div className="w-full sm:w-1/2 p-2">
          {user ? (
            <Chat
              coin={coin}
              style={{ cursor: user ? "pointer" : "not-allowed" }}
              title={
                user ? "" : "Debes iniciar sesión para utilizar esta función."
              }
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-white">
                You need to be logged in to use the chat
              </p>
            </div>
          )}
        </div>
      </div>
      {coin ? <News coin={coin} /> : <ScaleLoader color="#36d7b7" />}
    </div>
  );
}

export default CoinDetail;
