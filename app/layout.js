import Header from "../components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CoinMarketProvider } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Followcoin",
  description: "Followcoin is a social network for crypto traders",
  favicon: "/favicon.ico",

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoinMarketProvider>
          <Header />
          {children}
        </CoinMarketProvider>
      </body>
    </html>
  );
}
