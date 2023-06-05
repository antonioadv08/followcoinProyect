import React, { useEffect, useState, useCallback, useContext } from "react";
import { ScaleLoader } from "react-spinners";
import Image from "next/image";
import Chart from "./chart";
import Chat from "./chat";
import News from "./news";
import { CoinMarketContext } from "../context/context";

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
    <div className="text-white flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4">
        {coinInfo ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={coinInfo.logo}
                alt="coin logo"
                width={64}
                height={64}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{coinInfo.name}</h1>
              <p className="text-gray-400">{coinInfo.description}</p>
            </div>
          </div>
        ) : (
          <ScaleLoader color="#36d7b7" />
        )}
        <div className="flex h-full items-center justify-center">
          {historicalPrices ? (
            <div>
              <h1>Historical Prices</h1>
              <Chart historicalPrices={historicalPrices} />
            </div>
          ) : (
            <ScaleLoader color="#36d7b7" />
          )}
        </div>
      </div>
      <div className="md:w-1/4">
        {user ? (
          <Chat
            coin={coin}
            style={{ cursor: user ? "pointer" : "not-allowed" }}
            title={
              user ? "" : "Debes iniciar sesión para utilizar esta función."
            }
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-center">
              You need to be logged in to use the chat
            </p>
          </div>
        )}
        {/* {coin ? <News coin={coin} /> : <ScaleLoader color="#36d7b7" />} */}

      </div>
    </div>
  );
}

export default CoinDetail;
