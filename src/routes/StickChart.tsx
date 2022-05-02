import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import ApexChart from "react-apexcharts";
import { fetchCoinHistory, HistoricalData } from "../api";

interface OutletData {
  coinId: string;
}

interface ChartProps {
  isDark: boolean;
}

function Chart({ isDark }: ChartProps) {
  const { coinId } = useOutletContext<OutletData>();
  const { isLoading, data } = useQuery<HistoricalData[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {
    refetchInterval: 10000,
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "stickPrice",
              data:
                data?.map((price) => ({
                  x: price.time_close,
                  y: [price.open.toFixed(2), price.high.toFixed(2), price.low.toFixed(2), price.close.toFixed(2)],
                })) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: true },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              labels: { formatter: (value: number) => `$${value.toFixed(2)}` },
              axisBorder: { show: false },
              axisTicks: { show: false },
              tooltip: { enabled: true },
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: true },
              labels: { show: true },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
