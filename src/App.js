import React from "react";
import API from "./Components/Api";
import "./styles.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import styled from "styled-components";

const ICON = styled.i`
  font-size: 5rem;
  color: #f2a900;
`;
export default function App() {
  return (
    <div className="App">
      <h1>Bitcoin Value Tracker</h1>
      <ICON className="fab fa-bitcoin" />
      <API />
    </div>
  );
}
