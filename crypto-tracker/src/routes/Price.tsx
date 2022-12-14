import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

interface ChartProprs {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Price() {
  const { coinId } = useOutletContext<ChartProprs>();

  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <div>
          {data?.map((price) => (
            <PriceList>
              <dl>
                <dt>Date : </dt>
                <dd>{new Date(price.time_close * 1000).toDateString()}</dd>
              </dl>
              <dl>
                <dt>open : </dt>
                <dd>${price.open}</dd>
              </dl>
              <dl>
                <dt>close : </dt>
                <dd>${price.close}</dd>
              </dl>
              <dl>
                <dt>high : </dt>
                <dd>${price.high}</dd>
              </dl>
              <dl>
                <dt>low : </dt>
                <dd>${price.low}</dd>
              </dl>
            </PriceList>
          ))}
        </div>
      )}
    </div>
  );
}

const PriceList = styled.div`
  margin-bottom: 20px;
  dl {
    display: flex;
    margin: 0 auto -1px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${(props) => props.theme.cardBgColor};
    padding: 15px 20px;
    dd {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export default Price;
