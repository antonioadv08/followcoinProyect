import React from "react";
import { useEffect, useState,useCallback} from "react";
import Link from "next/link";
import { ScaleLoader } from "react-spinners";

function news({ coin }) {
  const [news, setNews] = useState([]);

  const getNews = useCallback (async () => {
    try {
      const res = await fetch(`/api/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coin: coin }),
      });
      const data = await res.json();
      console.log(data.data)
      setNews(data.data);
    } catch (e) {
      console.log(e.message);
    }
  }, [coin]);

  useEffect(() => {
    getNews();
  }, [coin]);

  return (
    <div className="container mx-auto px-4 py-8">
      {news ? (
        <ul className="list-disc pl-4">
          {news.map((item) => (
            <li key={item.url} className="py-4">
              <img src={item.image_url ? item.image_url : "https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg?w=2000"} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <Link href={item.link} className="text-blue-500 hover:text-blue-700" target="_blank">Leer más</Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <ScaleLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default news;
