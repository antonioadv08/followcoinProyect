"use client";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { CoinMarketContext } from "../../context/context";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import BeatLoader from "react-spinners/BeatLoader";

function Route() {
  const { user, getCoins } = useContext(CoinMarketContext);
  const [coins, setCoins] = useState([]);
  const [imageError, setImageError] = useState(false);

  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const getRandomImage = () => {
    const images = [
      "/ae.png",
      "/adb.png",
      "/aeon.png",
      "/btcd.png",
      "/ern.png",
      "/fil.png",
      "/fida.png",
      "/gold.png",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  const formatNum = (num) => {
    return Number(num.toFixed(2)).toLocaleString();
  };

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getCoins();
      console.log(apiResponse);
      setCoins(apiResponse);
    } catch (e) {
      console.log(e.message);
    }
  }, [getCoins]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }

    setData();
  }, []);
  console.log(coins);

  return (
    <div className="text-white">
      <button onClick={openModal}>Mostrar lista de monedas</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Lista de monedas</h2>
            <ul>
              {coins?coins.map((coin) => (
                <li key={coin.id}>
                  <>
                    <Image
                      src={`/${coin.symbol}.png`}
                      alt={coin.name}
                      width={30}
                      height={20}
                      onError={() => setImageError(true)}
                      style={{ display: imageError ? "none" : "block" }}
                    />
                      {coin.name}&nbsp;
                      {formatNum(coin.quote.USD.price)} USD
                 
                    {imageError && (
                      <Image
                        src={getRandomImage()}
                        alt="Random Coin"
                        width={30}
                        height={20}
                      />
                    )}
                  </>
                </li>
              )):<BeatLoader/>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Route;
