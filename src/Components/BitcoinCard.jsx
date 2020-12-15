import { Card } from "antd";
import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CARD = styled(Card.Grid)`
  color: white;
  background-color: #16213e;
  line-height: 0.8;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #e94560;
    transform: scale(1.1);
  }
`;
const gridStyle = {
  width: "75%",
  textAlign: "center"
};
const H2 = styled.h2`
  color: white;
`;
const BitcoinCard = ({ data }) => {
  const Symbol = data.symbol;
  return (
    <DIV>
      <CARD style={gridStyle} size="small" bordered="true">
        <H2>{data.code}</H2>
        {Symbol === "&#36;" ? (
          <i className="fas fa-dollar-sign" />
        ) : Symbol === "&pound;" ? (
          <i className="fas fa-pound-sign" />
        ) : (
          <i className="fas fa-euro-sign" />
        )}
        {data.rate_float}
      </CARD>
    </DIV>
  );
};
export default BitcoinCard;
