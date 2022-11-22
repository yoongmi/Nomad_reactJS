import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Nomad_reactJS/:coinId/*" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="/Nomad_reactJS" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;