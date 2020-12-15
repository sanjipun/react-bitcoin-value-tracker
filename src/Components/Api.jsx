import { Col, Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import BitcoinCard from "./BitcoinCard";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const API = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const fetch = async () => {
        const { data } = await Axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setResult(data.bpi);
        setLoading(false);
      };
      fetch();
    }, 5000);
  }, []);
  
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 100, marginTop: 30 }} spin />
  );

  return (
    <div>
      {loading === false ? (
        <h1>
          <Row>
            {Object.keys(result).map((item, i) => {
              return (
                <Col key={i} span={8} xs={24} sm={24} md={12} lg={12} xl={8}>
                  <BitcoinCard data={result[item]} />
                </Col>
              );
            })}
          </Row>
        </h1>
      ) : (
        <Spin
          style={{ fontSize: "2rem", color: "#f2a900" }}
          tip="Loading..."
          indicator={antIcon}
        />
      )}
    </div>
  );
};
export default API;
