"use client"
import React, { useContext, useState, useEffect, useCallback } from "react";
import { CoinMarketContext } from "../../context/context";
import "tailwindcss/tailwind.css";
import { ScaleLoader } from "react-spinners";
import CMCtableHeader from "@/components/cmc-table/cmcTableHeader";
import CMCtableRow from "@/components/cmc-table/cmcTableRow";
import { useRouter } from "next/navigation";

function Watchlist() {
  const { watchlist, setWatchlist, getCoins, user } = useContext(
    CoinMarketContext
  );

  const router = useRouter();

  let [coinData, setCoinData] = useState(null);

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getCoins();
      setCoinData(apiResponse);
    } catch (e) {
      console.log(e.message);
    }
  }, [getCoins]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }

    setData();
    filterData();
  }, []);

  function filterData() {
    if (!coinData) return null;
    let filteredData = coinData.filter((coin) => {
      return watchlist.includes(coin.symbol);
    });
    return filteredData;
  }
  coinData = filterData();

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          {coinData && coinData.length > 0 ? (
            <>
              <CMCtableHeader />
              {coinData.map((coin, index) => {
                return (
                  <CMCtableRow
                    key={index}
                    starNum={coin.cmc_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    showBuy={true}
                    hRate={coin.quote.USD.percent_change_24h}
                    dRate={coin.quote.USD.percent_change_7d}
                    hRateIsIncrement={true}
                    price={coin.quote.USD.price}
                    marketCapValue={coin.quote.USD.market_cap}
                    volumeCryptoValue={coin.quote.USD.volume_24h}
                    volumeValue={coin.total_supply}
                    circulatingSupply={coin.circulating_supply}
                  />
                );
              })}
            </>
          ) : coinData && coinData.length === 0 ? (
            <tbody>
              <tr className="text-center">
                <td>No coins in the watchlist</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>
                  <ScaleLoader color="#36d7b7" />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default Watchlist;