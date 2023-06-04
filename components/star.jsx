import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CoinMarketContext } from "../context/context";

const Star = ({ id }) => {
  const { watchlist, setWatchlist, user } = useContext(CoinMarketContext);
  const isFavorite = watchlist.includes(id);

  const handleFavoriteClick = async () => {
    if (!user) {
      return;
    }

    if (isFavorite) {
      setWatchlist(watchlist.filter((coinId) => coinId !== id));
      const res = await fetch("/api/updatewatchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coin: id,
          user: user,
        }),
      });
      const data = await res.json();
      setWatchlist(data);
    } else {
      setWatchlist([...watchlist, id]);

      const res = await fetch("/api/updatewatchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coin: id,
          user: user,
        }),
      });
      const data = await res.json();
      setWatchlist(data);
    }
  };

  return (
    <div
      onClick={handleFavoriteClick}
      style={{ cursor: user ? "pointer" : "not-allowed" }}
      title={user ? "" : "Debes iniciar sesión para utilizar esta función."}
    >
      <FaStar color={isFavorite ? "yellow" : "white"} />
    </div>
  );
};

export default Star;
