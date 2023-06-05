/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
        port: "",
        pathname: "/static/img/coins/64x64/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/spothq/cryptocurrency-icons/master/128/color/**",
      },
      {
        protocol: "https",
        hostname: "meta.viewblock.io",
        port: "",
        pathname: "/**/logo",
      },
      {
        protocol: "https",
        hostname: "cryptocurrencyliveprices.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/public/coinlogo/128/color/**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "followcoin-proyect.vercel.app",
        port: "",
        pathname: "/public/coinlogo/128/color/**",
      },
    ],
  },
};

module.exports = nextConfig;
