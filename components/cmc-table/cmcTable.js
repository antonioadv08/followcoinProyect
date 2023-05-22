"use client";
import { useContext, useEffect, useState, useCallback } from "react";
import btc from "../../assets/btc.png";
import { CoinMarketContext } from "../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./cmcTableRow";

const CMCtable = () => {
  let { getCoins, searchValue } = useContext(CoinMarketContext);
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
    setData();
  }, [setData]);
  function filterData() {
    if (searchValue === "") {
      return coinData;
    } else {
      return coinData.filter((coin) => {
        return coin.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
  }

  coinData = filterData();

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCtableHeader />

          {coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCtableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
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
            })
          ) : (
            <tbody>

              <tr>
                <td>No se ha encontrado nada</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCtable;
