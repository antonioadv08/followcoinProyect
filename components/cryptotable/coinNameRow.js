import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BeatLoader from "react-spinners/BeatLoader";
import { usePathname, useSearchParams } from "next/navigation";
import "tailwindcss/tailwind.css"


const CoinNameRow = ({ name, coinSymbol }) => {
  const [coinInfo, setCoinInfo] = useState({});
  const [imageError, setImageError] = useState(false);
  const router = usePathname();

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

  const getRandomImage = () => {
    const images = ["/ae.png", "/adb.png", "/aeon.png", "/btcd.png","/ern.png","/fil.png","/fida.png","/gold.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };


  return (
    <div className="flex">
      {coinInfo ? (
        <>
          <Image
            src={`/${coinSymbol.toLowerCase()}.png`}
            alt={name}
            width={30}
            height={20}
            onError={() => setImageError(true)}
            style={{ display: imageError ? "none" : "block" }}
          />
          {imageError && (
            <Image
              src={`/${coinSymbol}.png`}
              alt="Random Coin"
              width={30}
              height={20}
            />
          )}
          <p className="ml-2">{name}</p>
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default CoinNameRow;