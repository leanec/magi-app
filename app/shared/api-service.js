import * as Https from "nativescript-https";

// Exchanges
const fetchBtcpop = () => Https.request({
  url: "https://btcpop.co/api/market-public.php",
  method: "GET",
  timeout: 30, // seconds (default 10)
  useLegacy: true,
}).then((response) => response.content.toJSON()).catch((error) => error);

const fetchMoondex = () => Https.request({
  url: "https://moon.moondex.org/api/v1/public/getmarketsummary?market=BTC-XMG",
  method: "GET",
  timeout: 30, // seconds (default 10)
  useLegacy: true,
}).then((response) => response.content.toJSON()).catch((error) => error);

// Network
const fetchCryptoid = () => Https.request({
  url: "https://chainz.cryptoid.info/explorer/index.data.dws?coin=xmg&v=1&n=10",
  method: "GET",
  timeout: 30, // seconds (default 10)
  useLegacy: true,
}).then((response) => response.content.toJSON()).catch((error) => error);

export {
  fetchBtcpop, fetchMoondex, fetchCryptoid,
};
