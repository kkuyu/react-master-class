import { useParams } from "react-router-dom";

type RouteParamsTest = {
  coinId: string;
};

function Coin() {
  const { coinId } = useParams<keyof RouteParamsTest>() as RouteParamsTest;

  return (
    <div>
      <h1>Coin: {coinId}</h1>
    </div>
  );
}

export default Coin;
