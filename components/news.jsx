import React from "react";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ScaleLoader } from "react-spinners";

function news({ coin }) {
  const [news, setNews] = useState([]);

  const getNews = useCallback(async () => {
    try {
      const res = await fetch(`/api/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coin: coin }),
      });
      const data = await res.json();
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
    {news.length > 2 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item,index) => (
                <li key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        src={item.image_url ? item.image_url : "https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg?w=2000"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="px-6 py-4">
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-500 text-base truncate">{item.description}</p>
                    </div>
                    <div className="px-6 py-4">
                        <Link
                            href={item.link}
                            className="text-blue-500 hover:text-blue-700"
                            target="_blank"
                        >
                            Leer más
                        </Link>
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
}

export default news;
