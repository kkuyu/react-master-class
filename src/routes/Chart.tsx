import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface OutletData {
  coinId: string;
}

export interface HistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<OutletData>();
  const { isLoading, data } = useQuery<HistoricalData[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}

export default Chart;
