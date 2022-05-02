import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import LineChart from "./routes/LineChart";
import StickChart from "./routes/StickChart";

interface RouterProps {
  isDark: boolean;
  toggleDark: () => void;
}

function Router({ isDark, toggleDark }: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="line-chart" element={<LineChart isDark={isDark} />} />
          <Route path="stick-chart" element={<StickChart isDark={isDark} />} />
        </Route>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
