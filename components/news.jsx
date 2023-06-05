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
      console.log(data.data);
      setNews(data.data);
    } catch (e) {
      console.log(e.message);
    }
  }, [coin]);

  useEffect(() => {
    // getNews();
    setNews([
      {
        title:
          "Veteran Traders Are Thinking Beyond BTC and ETH to Navigate the Volatile Crypto Market",
        link: "https://www.newsbtc.com/press-releases/veteran-traders-are-thinking-beyond-btc-and-eth-to-navigate-the-volatile-crypto-market/",
        keywords: null,
        creator: ["News BTC"],
        video_url: null,
        description:
          "No market is entirely bullish or bearish at any given point in time. Even during the most trying winters, market-relevant assets go on to generate multifold returns for investors. The key lies in unearthing them, rather than confining a portfolio to high-cap coins like Bitcoin and Ethereum. Rational Judgement Matters the Most Top crypto coins like BTC, ETH, XRP, ADA, and SOL, among others have largely saturated. This is also true about the leading cryptocurrencies in most niches. For example, top play-to-earn assets like SAND, MANA, and AXS have been undergoing price corrections for a while now. DeFi assets like Chainlink, Uniswap, Aave, and Pancakeswap have similar stories to tell. The growth of a market, especially one that is decentralized with low entry barriers, is in the hands of multiple players. Most crypto traders and investors fail to see this, however. Shrewd traders, on the other hand, dare to venture beyond top cryptos and invest in emerging and promising cryptos that have space for expansion. A balloon, when blown past its capacity, is bound to burst. Traders need to keep this fact in mind when investing in the market. “It’s important to understand that the space has really grown. It’s not just about the price of Bitcoin or the price of Ethereum. We have five or six companies that actually made more money last year than in the previous year. So, even during the time of a massive drop in the price of Bitcoin and Ethereum, we’ve had companies do better,” reminds Veteran trader Dan Tapiero. He is the founder of growth equity funds 10T Holdings and 1RoundTable Partners. DeFi, NFTs, and blockchain gaming were largely unheard of three to four years back. But that’s not the case now. They are worth billions. Even more shocking is the growth of meme coins. They are one of the most volatile and equally sought-after cryptocurrencies now. A broad perspective will help investors navigate the crypto market with profits this year. Promising New Cryptocurrencies on the 2023 Watch List These three emerging cryptocurrencies have significant growth potential this year. They are picked based on their market relevance, utility, and volatility. 1. Wall Street Memes – The Next Big Meme Coin? Wall Street Memes ($WSM) token is the latest crypto sensation. The overwhelming traffic to the presale has strengthened the predictions that the meme coin is gearing up for a large explosion this year. $WSM’s key highlight is its large community spread across 1-million+ from around the world. Wall Street Memes is one of the most popular online communities where people interested in investments and trading come together. The quirky memes of the platform have a large audience, including tech mogul Elon Musk.   Literally — Elon Musk (@elonmusk) March 18, 2023 Wall Street Memes is now hosting the presale of $WSM tokens. It is an extension of the community, which is known for selling out its first NFT collection titled Wall St Bulls within 32 minutes in 2021. Judging by the meteoric progress of the presale, $WSM is likely to repeat history. To give a better perspective, the event collected $1M within three days of going live. In less than a week of the launch, it is on its way to the $3M milestone. It won’t be long before the presale hits its hard cap of $30,577,000. Although the initial DEX Launch is scheduled for Q4, the presale is likely to sell out much earlier. The project puts forward a no-nonsense mission to empower ordinary people to become rich, tapping into the meme coin hype. It doesn’t promise to deliver everything under the sky, which is a popular trend in the market ahead of token launches. Instead, Wall Street Memes is straightforward about the fact the token doesn’t have any underlying purpose, product, or utility. If you’re new to the crypto market, you might find this bizarre. But at the heart of the meme coin movement is fun. And the market has a history of receiving them with 100X climbs. Dogecoin is a striking example. So is Pepe this year. They have accumulated hundreds of millions in market cap. Wall Street Memes can do better than Pepe, according to industry analysts. Check out the Wall Street Memes giveaway to join the community and stand a chance to win $10,000. Buy Wall Street Memes Token 2. yPredict ($YPRED) – Utility Token Backed by an All-in-One AI Ecosystem yPredict is a utility token that brings back the statistical edge to the crypto market. It is backed by an AI-based marketplace for crypto price predictive models designed by top AI experts, quants, and analysts. The project has high market relevance in the crypto market, currently flooded with bots and algorithms. While they were useful in the initial stages, they have grown to influence its pricing structure. Moreover, they can be manipulative. Traders are on the hunt for credible tools to win the market. And this is where yPredict steps in. Although less volatile than meme coins like $WSM, yPredict has the potential to bring consistently growing returns as it acquires new subscribers and users. Visit yPredict Presale 3. Launchpad XYZ (LPX) – Everything Web 3.0 in One Place More investors are trying their hands on crypto this year. The poor returns from the traditional stock and commodity markets, combined with rising inflation and global economic instability, have urged them to look for alternatives. That’s optimistic. However, the complex jargon and concepts that lace the market drive them away. This has to change if cryptocurrencies and NFTs are to go mainstream. Launchpad XYZ aims to tackle the problem using a Web 3.0 hub that lowers the entry barrier to the industry. Here, users can discover the best opportunities across Non-Fungible Tokens (NFTs), fractionalized assets, utility tokens, and Web3 presales. Different components of the ecosystem include: An NFT marketplace A play-to-earn gaming hub A metaverse experience library A Web3 wallet An NFT DEX A trading terminal.   Attention, all #Gamers 🎮💰 Prepare to dive into Launchpad XYZ’s epic #P2E game library, where the games with the biggest earning potential and most thrilling engagement await you! 🚀💥 Join our #Presale now ⬇️https://t.co/yYq4jnPZiL#Web3Gaming #PlayToEarn #Blockchain pic.twitter.com/XAvd8uXkB2 — Launchpad.xyz (@launchpadlpx) June 1, 2023 Visit Launchpad XYZ Presale   Disclaimer: This is a paid release. The statements, views and opinions expressed in this column are solely those of the content provider and do not necessarily represent those of NewsBTC. NewsBTC does not guarantee the accuracy or timeliness of information available in such content. Do your research and invest at your own risk.    ",
        content:
          "No market is entirely bullish or bearish at any given point in time. Even during the most trying winters, market-relevant assets go on to generate multifold returns for investors. The key lies in unearthing them, rather than confining a portfolio to high-cap coins like Bitcoin and Ethereum. Rational Judgement Matters the Most Top crypto coins like BTC, ETH, XRP, ADA, and SOL, among others have largely saturated. This is also true about the leading cryptocurrencies in most niches. For example, top play-to-earn assets like SAND, MANA, and AXS have been undergoing price corrections for a while now. DeFi assets like Chainlink, Uniswap, Aave, and Pancakeswap have similar stories to tell. The growth of a market, especially one that is decentralized with low entry barriers, is in the hands of multiple players. Most crypto traders and investors fail to see this, however. Shrewd traders, on the other hand, dare to venture beyond top cryptos and invest in emerging and promising cryptos that have space for expansion. A balloon, when blown past its capacity, is bound to burst. Traders need to keep this fact in mind when investing in the market. “It’s important to understand that the space has really grown. It’s not just about the price of Bitcoin or the price of Ethereum. We have five or six companies that actually made more money last year than in the previous year. So, even during the time of a massive drop in the price of Bitcoin and Ethereum, we’ve had companies do better,” reminds Veteran trader Dan Tapiero. He is the founder of growth equity funds 10T Holdings and 1RoundTable Partners. DeFi, NFTs, and blockchain gaming were largely unheard of three to four years back. But that’s not the case now. They are worth billions. Even more shocking is the growth of meme coins. They are one of the most volatile and equally sought-after cryptocurrencies now. A broad perspective will help investors navigate the crypto market with profits this year. Promising New Cryptocurrencies on the 2023 Watch List These three emerging cryptocurrencies have significant growth potential this year. They are picked based on their market relevance, utility, and volatility. 1. Wall Street Memes – The Next Big Meme Coin? Wall Street Memes ($WSM) token is the latest crypto sensation. The overwhelming traffic to the presale has strengthened the predictions that the meme coin is gearing up for a large explosion this year. $WSM’s key highlight is its large community spread across 1-million+ from around the world. Wall Street Memes is one of the most popular online communities where people interested in investments and trading come together. The quirky memes of the platform have a large audience, including tech mogul Elon Musk. Literally — Elon Musk (@elonmusk) March 18, 2023 Wall Street Memes is now hosting the presale of $WSM tokens. It is an extension of the community, which is known for selling out its first NFT collection titled Wall St Bulls within 32 minutes in 2021. Judging by the meteoric progress of the presale, $WSM is likely to repeat history. To give a better perspective, the event collected $1M within three days of going live. In less than a week of the launch, it is on its way to the $3M milestone. It won’t be long before the presale hits its hard cap of $30,577,000. Although the initial DEX Launch is scheduled for Q4, the presale is likely to sell out much earlier. The project puts forward a no-nonsense mission to empower ordinary people to become rich, tapping into the meme coin hype. It doesn’t promise to deliver everything under the sky, which is a popular trend in the market ahead of token launches. Instead, Wall Street Memes is straightforward about the fact the token doesn’t have any underlying purpose, product, or utility. If you’re new to the crypto market, you might find this bizarre. But at the heart of the meme coin movement is fun. And the market has a history of receiving them with 100X climbs. Dogecoin is a striking example. So is Pepe this year. They have accumulated hundreds of millions in market cap. Wall Street Memes can do better than Pepe, according to industry analysts. Check out the Wall Street Memes giveaway to join the community and stand a chance to win $10,000. Buy Wall Street Memes Token 2. yPredict ($YPRED) – Utility Token Backed by an All-in-One AI Ecosystem yPredict is a utility token that brings back the statistical edge to the crypto market. It is backed by an AI-based marketplace for crypto price predictive models designed by top AI experts, quants, and analysts. The project has high market relevance in the crypto market, currently flooded with bots and algorithms. While they were useful in the initial stages, they have grown to influence its pricing structure. Moreover, they can be manipulative. Traders are on the hunt for credible tools to win the market. And this is where yPredict steps in. Although less volatile than meme coins like $WSM, yPredict has the potential to bring consistently growing returns as it acquires new subscribers and users. Visit yPredict Presale 3. Launchpad XYZ (LPX) – Everything Web 3.0 in One Place More investors are trying their hands on crypto this year. The poor returns from the traditional stock and commodity markets, combined with rising inflation and global economic instability, have urged them to look for alternatives. That’s optimistic. However, the complex jargon and concepts that lace the market drive them away. This has to change if cryptocurrencies and NFTs are to go mainstream. Launchpad XYZ aims to tackle the problem using a Web 3.0 hub that lowers the entry barrier to the industry. Here, users can discover the best opportunities across Non-Fungible Tokens (NFTs), fractionalized assets, utility tokens, and Web3 presales. Different components of the ecosystem include: An NFT marketplace A play-to-earn gaming hub A metaverse experience library A Web3 wallet An NFT DEX A trading terminal. Attention, all #Gamers 🎮💰 Prepare to dive into Launchpad XYZ’s epic #P2E game library, where the games with the biggest earning potential and most thrilling engagement await you! 🚀💥 Join our #Presale now ⬇️ https://t.co/yYq4jnPZiL #Web3Gaming #PlayToEarn #Blockchain pic.twitter.com/XAvd8uXkB2 — Launchpad.xyz (@launchpadlpx) June 1, 2023 Visit Launchpad XYZ Presale Disclaimer: This is a paid release. The statements, views and opinions expressed in this column are solely those of the content provider and do not necessarily represent those of NewsBTC. NewsBTC does not guarantee the accuracy or timeliness of information available in such content. Do your research and invest at your own risk.",
        pubDate: "2023-06-05 06:38:28",
        image_url:
          "https://www.newsbtc.com/wp-content/uploads/2023/06/Picture86-1-460x241.jpg",
        source_id: "newsbtc",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Gene alterations in biliary tract cancer offer potential targets for effective precision therapies",
        link: "https://www.news-medical.net/news/20230605/Gene-alterations-in-biliary-tract-cancer-offer-potential-targets-for-effective-precision-therapies.aspx",
        keywords: null,
        creator: null,
        video_url: null,
        description:
          "Gene alterations in biliary tract cancer offer potential targets for current or future precision therapies. This is demonstrated by a highly acclaimed study conducted by Karl Landsteiner University of Health Sciences in collaboration with the Medical University of Vienna.",
        content:
          'Gene alterations in biliary tract cancer offer potential targets for current or future precision therapies. This is demonstrated by a highly acclaimed study conducted by Karl Landsteiner University of Health Sciences in collaboration with the Medical University of Vienna. In this study, cells from biliary tract cancer were examined for genetic alterations. The results demonstrate the potential of genetic profiling of tumors as a basis for promising and targeted therapies. Image Credit: Adobestock/Matthieu Advanced cancers of the biliary tract (BTC) are almost always fatal. With a current five-year survival probability of 2 percent, the search is on for new, effective treatments. One challenge is the high genetic variability and heterogeneity of tumor cells. In order to better exploit this variability for targeted therapies, it has now been systematically investigated. The team from the Karl Landsteiner University of Health Sciences (KL Krems) and the Medical University of Vienna used data from 92 affected patients in 3 centres in Austria as a basis. "Today\'s sequencing methods allow us to localize genetic alterations in tumor cells very precisely," explains Hossein Taghizadeh, MD-PhD from the Clinical Department of Internal Medicine 1 at St. Pölten University Hospital, one of the education and research sites of KL Krems, and first author of the study. "These alterations are something like target coordinates for modern, very efficient and precise cancer therapies. Based on data from affected individuals in Austria, we wanted our study to create a systematic genetic "map" of these target coordinates for BTC. At the same time, we aimed for showing that the methodology can be easily integrated into everyday clinical practice and that early tumor sequencing in advanced bile duct carcinoma should be established." Published internationally the analysis in the study provided extensive results. In fact, a total of 205 molecular genetic aberrations were found in 61 affected individuals. Only in 15 affected individuals were no aberrations detected at all, and in another 16 the sample material was not sufficient for analysis. The 205 aberrations included a total of 198 mutations occurring in 89 different genes. Other mismatches included those due to fusions of genes. Mutations of the KRAS and TP53 genes occurred most frequently (22.4 percent each). Both are "good acquaintances" in oncology, as their mutations are involved in the development of a whole range of different cancers. To assess the extent to which the mutations found would be suitable as targets for an existing precision therapy, the team led by Taghizadeh, MD-PhD, used the so-called ESCAT classification. This classifies cancer cell mutations according to their suitability as targets for precision therapy. "Our result showed that a quarter of all affected individuals with proven genetic abnormalities could benefit from precision therapies." Thus, the study clearly shows that bile duct cancer offers numerous potential targets for effective precision therapies. Based on our findings. We see a strong case for early molecular genetic profiling of BTC as part of the standard protocol – preferably before initiating systemic therapy. In this way, potential target coordinates for precision therapies could be found early and treatment adjusted accordingly. Especially since our work also demonstrates the feasibility of the necessary analyses in everyday clinical practice." Hossein Taghizadeh, MD-PhD, Clinical Department of Internal Medicine 1, St. Pölten University Hospital. Thus, this study also supports the oncological research focus of KL Krems, which is on clinical research with high relevance for a rapid benefit for patients. Karl Landsteiner University of Health Sciences Taghizadeh, H., et al. (2023) Austrian tricentric real-life analysis of molecular profiles of metastatic biliary tract cancer patients. Frontiers in Oncology . doi.org/10.3389/fonc.2023.1143825 .',
        pubDate: "2023-06-05 04:54:00",
        image_url:
          "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_750033_16859407916481964.jpg",
        source_id: "news-medical",
        category: ["health"],
        country:
          Array(6)[
            ("australia",
            "canada",
            "united kingdom",
            "india",
            "singapore",
            "united states of america")
          ],
        language: "english",
      },
      {
        title:
          "Bitcoin Price Topside Bias Vulnerable If It Continues To Struggle Below $28K",
        link: "https://cryptopress.network/bitcoin-price-topside-bias-vulnerable-if-it-continues-to-struggle-below-28k/",
        keywords: ["Bitcoin News"],
        creator: ["admin"],
        video_url: null,
        description:
          "Bitcoin is struggling to break through the $27,500 resistance zone and may see a sharp decline towards $25,550 in the near future. The cryptocurrency is currently trading below $27,200 and the 100 hourly Simple Moving Average. It broke below a bullish trend line with support near $27,100 on the hourly chart of the BTC/USD pair. […] The post Bitcoin Price Topside Bias Vulnerable If It Continues To Struggle Below $28K appeared first on Crypto Press Cryptocurrencies News Network.",
        content:
          "Bitcoin is struggling to break through the $27,500 resistance zone and may see a sharp decline towards $25,550 in the near future. The cryptocurrency is currently trading below $27,200 and the 100 hourly Simple Moving Average. It broke below a bullish trend line with support near $27,100 on the hourly chart of the BTC/USD pair. If the price fails to clear the $27,350 resistance, it could continue to move down towards immediate support at the $26,800 level, and potentially towards the $25,500 support level in the coming sessions. Technical indicators suggest a bearish trend. This article originally appeared on www.newsbtc.com The cryptocurrency market has been experiencing a roller coaster ride in the recent weeks, with the price of Bitcoin hovering around the $30,000 mark. While some may view this as a promising sign, technical analysts warn that the Bitcoin price topside bias could be vulnerable if it continues to struggle below the crucial $28,000 level. Bitcoin’s price performance in recent weeks has been less than stellar, with the cryptocurrency falling as much as 50% from its all-time high of around $64,000 in mid-April. However, the cryptocurrency has been able to maintain a strong support level around $30,000, a level which some traders believe is the bottom of the market. Despite the support level that Bitcoin has maintained, technical analysts warn that the cryptocurrency’s price topside bias could be vulnerable if it fails to break through the $28,000 resistance level. This resistance level has been a key barrier for the cryptocurrency since it began its downward trend in May. The main factor contributing to Bitcoin’s struggle is the increasing scrutiny of regulators around the world. As governments around the world formulate new regulations for cryptocurrencies, Bitcoin’s demand may be affected in the short term. Additionally, concerns about energy consumption and the environmental impact of Bitcoin mining have been raised, which could also have a negative effect on the cryptocurrency’s price. However, some analysts believe that Bitcoin’s price will eventually break through the resistance level and continue on an upward trend. They argue that the long-term outlook for the cryptocurrency is positive as more institutional investors and corporations adopt it as a store of value. Moreover, Bitcoin’s recent price consolidation is actually a healthy development for the cryptocurrency market. It allows for a price correction and promotes a more sustainable upward trend, rather than a sudden spike in price that could lead to a market crash. In conclusion, while the Bitcoin price topside bias may be vulnerable if it continues to struggle below the $28,000 resistance level, the long-term outlook for the cryptocurrency market remains optimistic. While regulatory scrutiny and environmental concerns may hamper the cryptocurrency’s demand in the short term, the increasing institutional adoption and the market’s consolidation are positive indicators for the future. It’s important for investors to remain patient and disciplined during this period of volatility and to focus on the long-term potential of the cryptocurrency market. Source link",
        pubDate: "2023-06-05 02:14:44",
        image_url: null,
        source_id: "cryptopress",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Bitcoin Price Topside Bias Vulnerable If It Continues To Struggle Below $28K",
        link: "https://www.newsbtc.com/analysis/btc/bitcoin-price-vulnerable-28k-2/",
        keywords:
          Array(6)[
            ("BTC", "bitcoin", "bitcoin price", "btcusd", "BTCUSDT", "xbtusd")
          ],
        creator: ["Aayush Jindal"],
        video_url: null,
        description:
          "Bitcoin price is struggling to clear the $27,500 resistance zone. BTC is sliding and there could be a sharp decline toward $25,550 in the coming sessions. Bitcoin is still struggling to stay above the $27,000 support zone. The price is trading below $27,200 and the 100 hourly Simple moving average. There was a break below a key bullish trend line with support near $27,100 on the hourly chart of the BTC/USD pair (data feed from Kraken). The pair could revisit the $26,550 support and might continue to decline. Bitcoin Price Faces Resistance Bitcoin price started a minor upside correction from the $26,550 support zone. BTC climbed above the $27,000 resistance zone and the 100 hourly Simple moving average. There was a move above the 23.6% Fib retracement level of the key decline from the $28,450 swing high to the $26,571 low. However, the bears were active near the $27,500 resistance zone. There was no convincing move above the $27,350 resistance zone. Bitcoin price stayed below the 50% Fib retracement level of the key decline from the $28,450 swing high to the $26,571 low. It is now trading below $27,200 and the 100 hourly Simple moving average. Immediate resistance on the upside is near the $27,200 level and the 100 hourly Simple moving average. The next major resistance is near the $27,350 level. The main resistance sits near the $27,500 level. Source: BTCUSD on TradingView.com An upside break and close above $27,500 could start a decent increase toward $28,000. Any more gains above the $28,000 resistance zone might send the price toward the $28,500 resistance zone. If there is a close above the $28,500 resistance, there could be a move toward the $30,000 resistance zone in the near term. More Losses in BTC? If Bitcoin’s price fails to clear the $27,350 resistance, it could continue to move down. Immediate support on the downside is near the $26,800 level. The next major support is near the $26,550 zone, below which the price might start a strong decline. In the stated case, the price could drop toward the $25,500 support in the coming sessions. Technical indicators: Hourly MACD – The MACD is now gaining pace in the bearish zone. Hourly RSI (Relative Strength Index) – The RSI for BTC/USD is below the 50 level. Major Support Levels – $26,800, followed by $26,550. Major Resistance Levels – $27,200, $27,350, and $27,500.",
        content:
          "Bitcoin price is struggling to clear the $27,500 resistance zone. BTC is sliding and there could be a sharp decline toward $25,550 in the coming sessions. Bitcoin is still struggling to stay above the $27,000 support zone. The price is trading below $27,200 and the 100 hourly Simple moving average. There was a break below a key bullish trend line with support near $27,100 on the hourly chart of the BTC/USD pair (data feed from Kraken). The pair could revisit the $26,550 support and might continue to decline. Bitcoin Price Faces Resistance Bitcoin price started a minor upside correction from the $26,550 support zone. BTC climbed above the $27,000 resistance zone and the 100 hourly Simple moving average. There was a move above the 23.6% Fib retracement level of the key decline from the $28,450 swing high to the $26,571 low. However, the bears were active near the $27,500 resistance zone. There was no convincing move above the $27,350 resistance zone. Bitcoin price stayed below the 50% Fib retracement level of the key decline from the $28,450 swing high to the $26,571 low. It is now trading below $27,200 and the 100 hourly Simple moving average . Immediate resistance on the upside is near the $27,200 level and the 100 hourly Simple moving average. The next major resistance is near the $27,350 level. The main resistance sits near the $27,500 level. Source: BTCUSD on TradingView.com An upside break and close above $27,500 could start a decent increase toward $28,000. Any more gains above the $28,000 resistance zone might send the price toward the $28,500 resistance zone. If there is a close above the $28,500 resistance, there could be a move toward the $30,000 resistance zone in the near term. More Losses in BTC? If Bitcoin’s price fails to clear the $27,350 resistance, it could continue to move down. Immediate support on the downside is near the $26,800 level. The next major support is near the $26,550 zone, below which the price might start a strong decline. In the stated case, the price could drop toward the $25,500 support in the coming sessions. Technical indicators: Hourly MACD – The MACD is now gaining pace in the bearish zone. Hourly RSI (Relative Strength Index) – The RSI for BTC/USD is below the 50 level. Major Support Levels – $26,800, followed by $26,550. Major Resistance Levels – $27,200, $27,350, and $27,500. Tags: bitcoin bitcoin price btcusd BTCUSDT xbtusd",
        pubDate: "2023-06-05 02:14:44",
        image_url:
          "https://www.newsbtc.com/wp-content/uploads/2021/05/shutterstock_1610297188-460x256.jpg",
        source_id: "newsbtc",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Ripple case: Pro-XRP lawyer tips outright SEC victory at ‘less than 3%’",
        link: "https://cointelegraph.com/news/ripple-xrp-lawyer-outright-sec-victory-three-percent",
        keywords: [
          "Ripple case",
          "ripple SEC",
          "XRP",
          "John Deaton",
          "ripple lawsuit",
        ],
        creator: ["Cointelegraph By Tom Mitchelhill"],
        video_url: null,
        description:
          "Attorney John Deaton says there’s a 25% chance Ripple will see an outright win against the Securities and Exchange Commission, while rumors fly of a possible Ripple IPO.",
        content:
          "Pro-XRP lawyer John Deaton has tipped less than a 3% chance for the United States Securities and Exchange Commission to score an outright win against Ripple, as an end to the long-running lawsuit draws closer. The CryptoLaw founder has been a vocal advocate for Ripple against the SEC, which filed a lawsuit against the company in December 2020, alleging that the sale of its XRP ( XRP ) token represented an unregistered securities offering. In a June 3 episode of The Good Morning Crypto podcast , Deaton said he tipped a 25% chance that presiding U.S. District Judge Torres rules in outright favor of Ripple, and a 50% chance that Ripple claims victory by way of a “splitting the baby” ruling. This refers to Judge Torress “drawing a line in the sand,” where she could potentially rule that XRP was offered as an unregistered security before 2018. However, in the wake of the Hinman documents — which refer to internal SEC messages related to a 2018 speech given by former SEC Director William Hinman — it’s possible that cryptocurrencies can transition from securities to commodities once they become sufficiently decentralized. “I think that XRP itself is going to be deemed not a security and that I think that secondary market sales show comment. Even if [Judge Torres] does rule finding that Ripple violated the law, that doesn't apply to secondary market sales,” Deaton explained. While Ripple executives including its CEO Brad Garlinghouse have long been predicting an imminent end to the rollercoaster lawsuit from SEC, Deaton highlighted that Judge Torres will most likely come to a final decision before Sept. 30 this year. Deaton brought attention to what he called a “six-month list” that district judges must file to Congress. The list details all of the summary judgements that have been pending for longer than six months. It gets published on the last day of March and the last day of September. Additionally, Deaton also gave his predictions for the price of Ripple’s native XRP token following a positive ruling. Related: Pro-XRP attorney’s phone hacked to promote LAW token Speaking to Cointelegraph on May 22 , Deaton said that the Ripple community should also keep a close eye on June 13, where investors will discover if XRP was actually discussed “between SEC staff prior to the Hinman speech.” This date is when the Hinman materials will most likely be unsealed and could have a drastic impact on the case. There are also rumors circulating that Ripple may potentially IPO as a public company following the conclusion of the lawsuit. NEW: In April, @Ripple hosted a private \"road show\" (a marketing event where a company and its underwriters meet with potential investors to generate interest in an IPO). I'm told it was attended by just about every reputable institutional investment firm on the Street. https://t.co/fyTzi6pr0W According to a June 2 tweet from Fox Business journalist Eleanor Terrett, Ripple hosted a “road show” where it met with underwriters and other investors to garner interest in a potential public offering. Crypto Twitter Hall of Flame: Pro-XRP lawyer John Deaton ‘10x more into BTC, 4x more into ETH",
        pubDate: "2023-06-05 02:07:34",
        image_url:
          "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=840/https://s3.cointelegraph.com/uploads/2023-06/ede3bbf7-c11b-4688-b7ac-011bd2a8d2e4.jpg",
        source_id: "cointelegraph",
        category: ["business"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Top Trader Says XRP Is Ready For another Leg Up That Will Outperform Bitcoin. Here’s the Target",
        link: "https://timestabloid.com/top-trader-says-xrp-is-ready-for-another-leg-up-that-will-outperform-bitcoin-heres-the-target/",
        keywords:
          Array(7)[
            ("Cryptocurrency",
            "News",
            "Ripple",
            "XRP",
            "XRP Price",
            "XRP Price Analysis",
            "XRP Price Prediction")
          ],
        creator: ["Solomon Odunayo"],
        video_url: null,
        description:
          "Kaleo, a pseudonymous analyst and trader, is predicting a bullish price trend for XRP, the 6th largest cryptocurrency by market cap, which he expects to outperform the flagship crypto Bitcoin (BTC). The widely-followed analyst tells his 590,000 Twitter followers that he sees a bullish continuation for XRP after successfully retesting its diagonal resistance as support. […] The post Top Trader Says XRP Is Ready For another Leg Up That Will Outperform Bitcoin. Here’s the Target appeared first on Times Tabloid.",
        content:
          "Kaleo, a pseudonymous analyst and trader, is predicting a bullish price trend for XRP, the 6th largest cryptocurrency by market cap, which he expects to outperform the flagship crypto Bitcoin (BTC). The widely-followed analyst tells his 590,000 Twitter followers that he sees a bullish continuation for XRP after successfully retesting its diagonal resistance as support. According to Kaleo in the same thread, XRP could be following in the footsteps of Tron (TRX), which recently rallied from a low of $0.74 to a high of $0.85. At the time of press, XRP is trading for $0.5369, with an 11.3% price surge in the last seven days, According to CoinMarketCap. Analyzing XRP against Bitcoin (XRP/BTC), Kaleo pointed out that the pair also looks poised to surge after breaking above its diagonal resistance. Meanwhile, fellow crypto strategist Cantering Clark is also bullish on XRP. In one of his recent tweets, the trader said he’s looking to accumulate XRP as he believes its price structure suggests that it is almost ready to surge.",
        pubDate: "2023-06-05 00:37:20",
        image_url: null,
        source_id: "timestabloid",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title: "On a Deal to Suspend the US Debt Ceiling, Bitcoin Gains 4%",
        link: "https://www.thecoinrepublic.com/2023/06/04/on-a-deal-to-suspend-the-us-debt-ceiling-bitcoin-gains-4/",
        keywords: ["news", "bitcoin", "cryptocurrency", "US Debt Ceiling"],
        creator: ["Ritika Sharma"],
        video_url: null,
        description:
          "1 BTC recently climbed to above $28,500. 2 America’s Debt Limit was $31.4 trillion as of January 2023. The news that the U.S. government had reached a consensus on the debt limit caused BTC to soar to a three-week high. During the Asian trading session on Monday morning, cryptocurrency markets were up. A debt limit agreement reached by leading congressional Republican Kevin McCarthy and US President Joe Biden has given the movement impetus. The preliminary deal to raise the $31.4 trillion debt limit for the federal government has not yet been approved by Congress. Bloomberg claims that despite this, it …",
        content:
          "On a Deal to Suspend the US Debt Ceiling, Bitcoin Gains 4% The news that the U.S. government had reached a consensus on the debt limit caused BTC to soar to a three-week high. During the Asian trading session on Monday morning, cryptocurrency markets were up. A debt limit agreement reached by leading congressional Republican Kevin McCarthy and US President Joe Biden has given the movement impetus. The preliminary deal to raise the $31.4 trillion debt limit for the federal government has not yet been approved by Congress. Bloomberg claims that despite this, it has increased risk appetite in international markets. According to John Toro, head of trading at the cryptocurrency exchange Independent Reserve, the settlement of the debt-ceiling crisis is the primary cause of this morning’s favorable risk mood. Front-end financing expenses are still quite high in comparison to cryptocurrency profits, which causes long investors to have a negative carry. BTC recently climbed to above $28,500, its highest level since May 8. It has now fallen a little, but it is still over $28,000 after an increase of 4% for the day. However, the longer-term perspective still shows BTC consolidating sideways. Created by Congress in 1917, The debt ceiling or limit is a statutory limit on the amount of debt that the Treasury may accumulate. There is a limit on how much the federal government may borrow in order to pay off the debt it has already incurred. Considering that the debt ceiling is presently $31.4 trillion, Treasury Secretary Janet Yellen issued a warning that, without an agreement, a default was quite possible. The agreement would suspend this debt ceiling until January 2025, removing any ceiling on the amount of additional debt that the government may issue. According to Tommy Honan, head of market research at the exchange Swyftx, it is likely that the mere relief of a debt agreement may draw traders back to the table and lead to the next significant leg-up in the price of Bitcoin. Both the overall national debt and the debt cap were $31.4 trillion as of January 2023. Since 2001, the U.S. government has spent an average of over $1 trillion more per year than it has taken in via taxes and other sources of income. It must borrow money to continue financing the payments that Congress has already approved in order to bridge the gap. U.S. President Joe Biden addressed continuing debt default discussions during his speech on the last day of the G7 conference in Japan, saying he would not accept a deal that benefits tax evaders and cryptocurrency traders. “I won’t agree to a compromise that safeguards wealthy traders and tax evaders while putting the lives of almost a million Americans who receive food assistance in danger.” The President claims that the bipartisan debt limit deal with Republican leaders will help crypto traders among other people, and the remarks are made in opposition to it. The political polarization in America prevents the two parties from reaching a compromise during discussions about the federal budget and debt limit. In the absence of a new budget agreement, the United States may run out of money as early as next month as the national debt soars to nearly $32 trillion. In an effort to tighten tax loopholes, President Biden took a shot at “wealthy crypto investors” earlier this month. In the general election that will take place in November 2024, Americans and the cryptocurrency sector are still optimistic that a President and government that is more supportive of the sector will be chosen.",
        pubDate: "2023-06-05 00:30:00",
        image_url: null,
        source_id: "thecoinrepublic",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Top Analyst Benjamin Cowen Issues Warning, Says History Signaling Massive Altcoin Reckoning",
        link: "https://cryptopress.network/top-analyst-benjamin-cowen-issues-warning-says-history-signaling-massive-altcoin-reckoning/",
        keywords:
          Array(12)[
            ("Altcoin News",
            "Altcoin",
            "Analyst",
            "Benjamin",
            "Cowen",
            "history",
            "issues",
            "Massive",
            "reckoning",
            "Signaling",
            "Top",
            "warning")
          ],
        creator: ["admin"],
        video_url: null,
        description:
          "A widely followed crypto analyst is issuing a warning to investors, saying that a deep correction in the altcoin markets may be on the horizon. In a new video update, prominent crypto strategist Benjamin Cowen tells his 783,000 YouTube subscribers that history is signaling a massive downswing for altcoins. According to Cowen, the Bitcoin dominance […] The post Top Analyst Benjamin Cowen Issues Warning, Says History Signaling Massive Altcoin Reckoning appeared first on Crypto Press Cryptocurrencies News Network.",
        content:
          "A widely followed crypto analyst is issuing a warning to investors, saying that a deep correction in the altcoin markets may be on the horizon. In a new video update, prominent crypto strategist Benjamin Cowen tells his 783,000 YouTube subscribers that history is signaling a massive downswing for altcoins. According to Cowen, the Bitcoin dominance (BTC.D) chart currently looks strong and historical data suggests that it will continue to be bullish as Bitcoin (BTC) inches closer to its halving event next year. The Bitcoin dominance index tracks how much of the total crypto market capitalization belongs to Bitcoin. A bullish BTC.D chart suggests that Bitcoin is taking a larger share of the crypto markets at the expense of altcoins. Says Cowen, “I think fundamentally the dominance is very bullish and if the dominance is bullish, it’s not a good thing for altcoins on their Bitcoin pairs. And if the dominance is bullish in the pre-halving year, then it tends to not be a good thing for altcoins on their USD pairs as well. That’s what history tells us. It doesn’t mean that it has to happen but that’s just what history tells us.” Cowen goes on to say that the crypto king’s dominance level breaking above 49% would be a “risk-off” signal and that BTC’s dominance level could rise even if Bitcoin’s price dips. “We could hold the line, and we could get another push higher, but if it happens then what I would say is don’t look so closely at the price, just look to see when the dominance breaks 49% in a sustained way, and that would to me be the risk-off signal. And you could still see the dominance break 49% in a Bitcoin downtrend. I mean don’t forget . What was going on in the market then? Bitcoin was going down and the dominance was going up.” Cowen goes on to say he that believes capital will likely rotate from altcoins into Bitcoin even though the process could take time. “You can see the altcoin bleeding back to Bitcoin. It’s clear as day… It’s happening. It’s just a very slow process… The altcoin market is likely just going to bleed back to Bitcoin for quite a long period of time, and that’s why it’s worthwhile to put on your (Bitcoin) maxi hat during that time until you see the altcoin market get wrecked on their Bitcoin pairs, the dominance well above the range high and only then does it make sense, in my opinion, to seriously consider the altcoin market.” I Don’t Miss a Beat – Subscribe to get crypto email alerts delivered directly to your inbox Check Price Action Follow us on Twitter , Facebook and Telegram Surf The Daily Hodl Mix   Featured Image: Shutterstock/Space creator/Natalia Siiatovskaia Source link",
        pubDate: "2023-06-05 00:00:13",
        image_url: null,
        source_id: "cryptopress",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Will BTC Price Hit ATH in 2023? Analyst Predicts Timeline For Bitcoin Bull Run",
        link: "https://bitcoinwarrior.net/2023/06/will-btc-price-hit-ath-in-2023-analyst-predicts-timeline-for-bitcoin-bull-run/",
        keywords: ["news"],
        creator: ["Bitcoin Warrior"],
        video_url: null,
        description:
          "The post Will BTC Price Hit ATH in 2023? Analyst Predicts Timeline For Bitcoin Bull Run appeared first on Coinpedia Fintech News The highly anticipated Bitcoin halving event, scheduled for April 2024, has created a buzz in the crypto community. Many analysts and investors have predicted that leading up to the Bitcoin halving, which occurs […] Visit Will BTC Price Hit ATH in 2023? Analyst Predicts Timeline For Bitcoin Bull Run on BitcoinWarrior.",
        content:
          "The post appeared first on The highly anticipated Bitcoin halving event, scheduled for April 2024, has created a buzz in the crypto community. Many analysts and investors have predicted that leading up to the Bitcoin halving, which occurs approximately every four years, the price of BTC would enter a period of consolidation. Analyst Credible Crypto’s expectations suggest that Bitcoin’s price would range between $20,000 and $40,000 for approximately 12 months. A Bitcoin halving is when the reward for mining new blocks is cut in half. Miners receive 50% fewer bitcoins for verifying transactions. This happens approximately every four years until a total of 21 million bitcoins are generated. Expectations: “The Bitcoin halving is in April 2024. Expect to go sideways between 20-40k for about 12 months which is when we accumulate as much Bitcoin as we can. Once the halving hits, we start our next bull run to 100k+ into 2025. WAGMI.” Reality: BTC makes a new ATH… — CrediBULL Crypto (@CredibleCrypto) The next Bitcoin halving is expected to occur in April 2024, around the time when the number of blocks reaches 740,000. At that point, the block reward will decrease from 6.25 bitcoins to 3.125 bitcoins. The exact date of the halving is not known because block generation time can vary, but on average, a new block is generated every ten minutes. Contrary to these expectations, the year 2023 witnessed a remarkable turn of events in the Bitcoin market. Instead of entering a sideways trend, Bitcoin had a remarkable run at the beginning of 2023. The coin experienced a notable surge since December 31st, marking a partial recovery from the significant decline it faced in 2022. However, currently, the token is encountering challenges as its value hovers around the $30,000 range.",
        pubDate: "2023-06-04 21:53:25",
        image_url: null,
        source_id: "bitcoinwarrior",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
      {
        title:
          "Atomic Wallet Hacked: Users Loose Millions; ZachXBT Investigating",
        link: "https://www.thecoinrepublic.com/2023/06/04/atomic-wallet-hacked-users-loose-millions-zachxbt-investigating/",
        keywords: ["news", "Atomic Wallet", "bitcoin", "Cryptocurrencies."],
        creator: ["Ritika Sharma"],
        video_url: null,
        description:
          "1 Largest loss to a victim has been observed at over 2.8 million USDT. 2 As per ZachXBT’s investigation and analysis, some Twitter users have reported losses in over 6 figures in the attack. As per Atomic Wallet’s tweet, it has been hacked and as a result, user funds have been compromised. Some victims got their entire balance drained. It was confirmed that they received reports of wallets being compromised. As per ZachXBT’s investigation and analysis, some Twitter users reported losing over six figures in the attack. We have received reports of wallets being compromised. We are doing all we …",
        content:
          "Atomic Wallet Hacked: Users Loose Millions; ZachXBT Investigating As per Atomic Wallet’s tweet, it has been hacked and as a result, user funds have been compromised. Some victims got their entire balance drained. It was confirmed that they received reports of wallets being compromised. As per ZachXBT’s investigation and analysis, some Twitter users reported losing over six figures in the attack. Atomic Wallet (AW) is a non-custodial blockchain wallet that utilizes the user’s cold storage for all the passwords and data stacked in the user’s device. It means that user’s own their backup phrase and all the private keys, and have full control over funds. AW has no access to the user’s wallet and their sensitive information. A 12-word backup is the key to the user’s wallet. It has essential significance for keeping the funds safe. Private keys are stored in the user’s device and are strongly encrypted for security and safety. The exchanges listed here deal within Ethereum (ETH), Solana (SOL), Binance Coin (BNB), Polygon (Matic), Monero (XMR), Avalanche (AVAX), Litecoin (LTC). It is important to note that Atomic Wallet enables its users to trade in over 1450 assets and amongst all, the volume of ERC20 is highest at its strength and TRC20 is in minority. According to ZachXBT, ‘somethings in the hack have been identified. The largest loss to a victim has been observed at over $2.8 Million. Victims have messaged their transaction hash to the investigators to help them investigate better. The investigation is still on and the root cause is yet to be found. On-chain investigator ZachXBT, in the past, has managed to recognize the whereabouts of the stolen funds which were sent to subordinated authorities to make arrests. He requested for the transaction hash from an affected Atomic Wallet user. As per atomicwallet.io website, Atomic Wallet is a trusted-decentralized wallet with over five million users. As per Wu Blockchain’s tweet, ‘it was perhaps a supply chain attack, where the hackers meddled with the software source code on the server and left it then for ordinary users to download’ As per the sources, BTC’s present cap is $526,264,020,782 with a 24-hour volume around $8,445,506,327. The ratio percentage of volume/market cap stands at 1.6% approximately. The current circulating supply of BTC is 19,392,350 BTC which is around 92.34% of the maximum supply 21,000,000 BTC. The fully diluted market cap is $570,189,560,119 of Bitcoin, at writing time. At the time of writing, Bitcoin price is $27,151.88 USD with a 24-hour trading volume of $8,445,506,327 USD. Bitcoin is down by 0.14% in the last 24 hours. BTC’s price performance in the last 24 hours showed a low of $26,958 and a high of $27,317. Counting all-time high from Nov 10, 2021 it is $68,789.63 (-60.53%) whereas an all-time low from Jul 15, 2010 dipped till $0.04865 (+55814524.87%). The popularity in watchlists for BTC has gone to 4,016,043x.",
        pubDate: "2023-06-04 21:30:00",
        image_url: null,
        source_id: "thecoinrepublic",
        category: ["top"],
        country: ["united states of america"],
        language: "english",
      },
    ]);
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
