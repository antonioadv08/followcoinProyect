"use client";
import { createContext, useState, useEffect } from "react";

// import {
//   dogeAbi,
//   daiAbi,
//   linkAbi,
//   usdcAbi,
//   dogeAddress,
//   linkAddress,
//   daiAddress,
//   usdcAddress,
// } from "../lib/constants";

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const setSearchedCoin = (data) => {
    setSearchValue(data);
  };

  const getCoins = async () => {
    try {
      const res = await fetch("/api/getTopTen");
      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <CoinMarketContext.Provider
      value={{
        getCoins,
        setSearchedCoin,
        searchValue,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
};
