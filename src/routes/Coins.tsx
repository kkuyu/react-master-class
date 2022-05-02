import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
  margin: 0 auto;
  max-width: 480px;
  padding: 0 20px;
`;

const Header = styled.header`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    border: 1px solid white;
    border-radius: 15px;
    transition: color 0.2s ease-in;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.accentColor};
    }
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

const Img = styled.img`
  margin-right: 10px;
  width: 35px;
`;

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface CoinsProps {
  toggleDark: () => void;
}

function Coins({ toggleDark }: CoinsProps) {
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
        <button onClick={toggleDark}>Toggle Theme</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((item) => (
            <Coin key={item.id}>
              <Link to={`/${item.id}/line-chart`} state={{ name: item.name, rank: item.rank }}>
                <Img src={`https://cryptocurrencyliveprices.com/img/${item.id}.png`} alt="" />
                {item.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
