import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";
import { Link, PathMatch, useMatch, useNavigate } from "react-router-dom";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers, InfoData, TickersData } from "../api";
import { useEffect } from "react";

interface RouteParams {
  coinId: string;
}

interface LocationParams {
  state: {
    name: string;
    rank: number;
  };
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 480px;
  padding: 0 20px;
`;

const Header = styled.header`
  position: relative;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 40px;
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  a {
    display: block;
  }
`;

function Coin() {
  const navigate = useNavigate();
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  const { state } = useLocation() as LocationParams;

  const lineChartMatch: PathMatch<"coinId"> | null = useMatch("/:coinId/line-chart");
  const stickChartMatch: PathMatch<"coinId"> | null = useMatch("/:coinId/stick-chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData, Error>(["info", coinId], () => fetchCoinInfo(coinId));
  const { isLoading: tickersLoading, data: tickersData } = useQuery<TickersData, Error>(["tickers", coinId], () => fetchCoinTickers(coinId), {
    refetchInterval: 5000,
  });

  const loading = infoLoading || tickersLoading;

  useEffect(() => {
    if (!lineChartMatch && !stickChartMatch) {
      navigate(`/${coinId}/line-chart`, { replace: true });
    }
  }, []);

  return (
    <Container>
      <Helmet>
        <title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
      <Header>
        <Link to="/">←</Link>
        <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${tickersData?.quotes?.USD?.price.toFixed(3) ?? 0}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={lineChartMatch !== null}>
              <Link to={`/${coinId}/line-chart`}>Line Chart</Link>
            </Tab>
            <Tab isActive={stickChartMatch !== null}>
              <Link to={`/${coinId}/stick-chart`}>Stick Chart</Link>
            </Tab>
          </Tabs>
          <Outlet context={{ coinId }} />
        </>
      )}
    </Container>
  );
}

export default Coin;
