"use client";
import React from "react";
import { useContext } from "react";
import { CoinMarketContext } from "../context/context";

function search() {
  let { setSearchedCoin } = useContext(CoinMarketContext);
  const word = (e) => {
    setSearchedCoin(e.target.value);
  };

  return <input type="text" placeholder="Search.." onChange={word} className="bg-transparent outline-none text-white w-70 ml-3"></input>;
}

export default search;
