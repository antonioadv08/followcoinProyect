"use client";
import { useContext, useEffect, useState, useCallback } from "react";
import btc from "../../assets/btc.png";
import { CoinMarketContext } from "../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./cmcTableRow";
import { ScaleLoader } from "react-spinners";

const CMCtable = () => {
  let { getCoins, searchValue,setSearchValue } = useContext(CoinMarketContext);

  let [coinData, setCoinData] = useState(null);
  let [price, setPrice] = useState(null);

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
    setSearchValue("");
  }, []);
  function filterData() {
    if (searchValue === "") {
      return coinData;
    } else if (coinData) {
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
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
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
                <td>
                  {" "}
                  <ScaleLoader color="#36d7b7" />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCtable;
