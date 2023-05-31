import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CoinMarketContext } from "../context/context";

const Star = ({ id }) => {
  const { watchlist, setWatchlist } = useContext(CoinMarketContext);
  const isFavorite = watchlist.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setWatchlist(watchlist.filter((coinId) => coinId !== id));
    } else {
      setWatchlist([...watchlist, id]);
    }
  };

  return (
    <div onClick={handleFavoriteClick}>
      <FaStar color={isFavorite ? "yellow" : "white"} />
    </div>
  );
};

export default Star;
