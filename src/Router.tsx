import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import LineChart from "./routes/LineChart";
import StickChart from "./routes/StickChart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="line-chart" element={<LineChart />} />
          <Route path="stick-chart" element={<StickChart />} />
        </Route>
        <Route path="/" element={<Coins />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
