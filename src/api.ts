import { CoinInterface } from "./routes/Coins";
import { InfoData, TickersData } from "./routes/Coin";
import { HistoricalData } from "./routes/Chart";

const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins(): Promise<CoinInterface[]> {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}

export async function fetchCoinInfo(coinId: string): Promise<InfoData> {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function fetchCoinTickers(coinId: string): Promise<TickersData> {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export async function fetchCoinHistory(coinId: string): Promise<HistoricalData[]> {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return await (await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)).json();
}
