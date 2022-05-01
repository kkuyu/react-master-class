import { CoinInterface } from "./routes/Coins";

export async function fetchCoins(): Promise<CoinInterface[]> {
  return await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
}
