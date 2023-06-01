"use client";
import Image from "next/image";
import More from "../../assets/svg/more";
import Star from "../star";
import CoinNameRow from "./coinNameRow";
import Rate from "./rate";
import { useRouter } from "next/router";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
  
};

const CMCtableRow = ({
  starNum,
  coinName,
  coinSymbol,
  price,
  hRate,
  dRate,
  marketCapValue,
  volumeValue,
  circulatingSupply,
  volumeCryptoValue,
}) => {
  const graphImages = [
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg",
  ];

  const getRandomGraph = () => {
    const rndInt = Math.floor(Math.random() * 10) + 1;
    return graphImages[rndInt];
  };



  const formatNum = (num) => {
    return Number(num.toFixed(2)).toLocaleString();
  };

  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
          <Star id={coinSymbol}/>
        </td>
        <td>{starNum}</td>

          <td className="cursor-pointer">
            <Link href={`coin/${coinSymbol}`}  >
              <CoinNameRow name={coinName} coinSymbol={coinSymbol} />
            </Link>
          </td>
    

        <td
          className="cursor-pointer"
          // onClick={viewPrice}
        >
          <p>${formatNum(price)}</p>
        </td>
        <td>
          <Rate  rate={`${formatNum(hRate)}%`} />
        </td>
        <td>
          <Rate  rate={`${formatNum(dRate)}%`} />
        </td>

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(volumeValue)}</p>
            <p className="text-gray-400">
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(circulatingSupply)}</p>
          </div>
        </td>

        <td>
          <Image src={getRandomGraph()} width={150} height={60} alt="" />
        </td>

        <td>
          <More />
        </td>
      </tr>
    </tbody>
  );
};

export default CMCtableRow;
