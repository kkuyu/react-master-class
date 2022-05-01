import { CoinInterface } from "./routes/Coins";
import { InfoData, TickersData } from "./routes/Coin";

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
