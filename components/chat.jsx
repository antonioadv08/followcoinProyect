"use client";
import { useEffect, useState, useContext } from "react";
import { CoinMarketContext } from "../context/context";

export default function chat({ coin }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useContext(CoinMarketContext);

  const getMessages = async () => {
    try {
      const res = await fetch("/api/getMesagges/" + coin);
      const messages = await res.json();
      setMessages(messages);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: user.email,
    };
    setMessages([...messages, newMessage]);
    setMessage("");
    await fetch("/api/updatechat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin: coin,
        user: user,
        message: newMessage,
      }),
    });
  };

  return (
<div className="text-white flex items-center justify-center">
  <form onSubmit={handleSubmit} className="mt-4">
    <h1 className="text-2xl font-bold my-2">{coin} chat</h1>
    <input
      name="message"
      type="text"
      placeholder="Write your message..."
      onChange={(e) => setMessage(e.target.value)}
      className="border-2 border-zinc-500 p-2 w-full text-black"
      value={message}
      autoFocus
    />

    <ul className="max-h-60vh overflow-y-scroll" style={{ maxHeight: "400px" }}>
      {messages?.map((message, index) => (
        <li
          key={index}
          className={`my-2 p-2 table text-sm rounded-md ${
            message.from === user.email ? "bg-sky-700 ml-auto" : "bg-black"
          }`}
        >
          <b>{/^[^@]*/.exec(message.from)}</b>:{message.body}
        </li>
      ))}
    </ul>
  </form>
</div>
  );
}
