import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  fire,
  telegram,
  cg,
  cmc,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "tokenomics",
    title: "Tokenomics",
  },
  {
    id: "roadmap",
    title: "Roadmap",
  },
  {
    id: "socials",
    title: "Socials",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Zero Taxes",
    content:
      "The Next Shib is a zero tax token. This means there are no swap or transfer fees occurring on the blockchain.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Renounced Contract",
    content:
      "The $XSHIB contract is renounced. There are no methods which can only be called by the developer. Ownership is now in the hands of the dead address.",
  },
  {
    id: "feature-3",
    icon: fire,
    title: "Burnt Liquidity",
    content:
      "The Liquidity Pool has been burnt. This means that the LP tokens have been sent to the dead address, making it impossible to pull the liquidity.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Renounced",
    value: "Contract",
  },
  {
    id: "stats-2",
    title: "Burnt",
    value: "Liquidity",
  },
  {
    id: "stats-3",
    title: "Taxes",
    value: "Zero",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Contract",
        link: "https://etherscan.io/token/0x000000000000000000000000000000000000dead",
      },
      {
        name: "Swap",
        link: "https://app.uniswap.org/#/swap?outputCurrency=0x000000000000000000000000000000000000dead",
      },
      {
        name: "Chart",
        link: "https://dextools.io/app/uniswap/pair-explorer/0x000000000000000000000000000000000000dead",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Telegram",
        link: "https://t.me/XSHIBETH",
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/XSHIBETH",
      },
      {
        name: "Medium",
        link: "https://www.medium.com/XSHIBETH",
      },
    ],
  },
  {
    title: "Affiliates & Listings",
    links: [
      {
        name: "CoinMarketCap",
        link: "https://coinmarketcap.com/",
      },
      {
        name: "CoinGecko",
        link: "https://www.coingecko.com/",
      },
      {
        name: "Moontok",
        link: "https://moontok.io/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: telegram,
    link: "https://www.t.me/XSHIBETH",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/XSHIBETH",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
    link: "https://twitter.com/XSHIBETH",
  },
  {
    id: "client-2",
    logo: binance,
    link: "https://t.me/XSHIBETH",
  },
  {
    id: "client-3",
    logo: coinbase,
    link: "https://etherscan.io/token/0x000000000000000000000000000000000000dead",
  },
  {
    id: "client-4",
    logo: dropbox,
    link: "https://dextools.io/app/uniswap/pair-explorer/0x000000000000000000000000000000000000dead",
  },
  {
    id: "client-5",
    logo: cmc,
    link: "https://coinmarketcap.com/",
  },
  {
    id: "client-6",
    logo: cg,
    link: "https://www.coingecko.com/",
  },
];
