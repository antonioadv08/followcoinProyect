"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BeatLoader from "react-spinners/BeatLoader";
import { usePathname, useSearchParams } from "next/navigation";

const CoinNameRow = ({ name, coinSymbol }) => {
  const [coinInfo, setCoinInfo] = useState({});
  const router = usePathname();

  console.log(router);

  const setData = useCallback(async () => {
    try {
      const res = await fetch(`/api/getCoin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coin: coinSymbol }),
      });

      const data = await res.json();
      setCoinInfo(data.data[coinSymbol][0]);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    if (router !== "/") {
      setData();
    }
  }, [setData]);

  return (
    <div className="flex">
      {router !== "/" ? (
        coinInfo.logo ? (
          <>
            <Image src={coinInfo.logo} alt={name} width={30} height={20} />
            <p className="ml-2">{name}</p>
          </>
        ) : (
          <BeatLoader color="#36d7b7" />
        )
      ) : (
        <p>{name}</p>
      )}
    </div>
  );
};

export default CoinNameRow;
