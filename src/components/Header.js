import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
`;
const RouteList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 32px;
  padding: 8px 0;
  a {
    position: relative;
    font-weight: 400;
  }
  a:not(:last-child) {
    margin-right: 16px;
  }
  a:before {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #fff;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <RouteList>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/expenses">Expenses</Link>
      </RouteList>
    </HeaderContainer>
  );
};

export default Header;
