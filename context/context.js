"use client";
import { createContext, useState, useEffect } from "react";
import { getSession } from "next-auth/react";

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
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const setSearchedCoin = (data) => {
    setSearchValue(data);
  };

  const getCoins = async () => {
    try {
      const res = await fetch("/api/getCoins");

      const data = await res.json();
      return data.data.data;
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    (async () => {
      const session = await getSession();

      if (session) {
        setUser(session.user);
      }
    })();
  }, []);

  return (
    <CoinMarketContext.Provider
      value={{
        getCoins,
        setSearchedCoin,
        searchValue,
        setSearchValue,
        user,
        watchlist,
        setWatchlist,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  );
};
