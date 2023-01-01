import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  count: number;
}

const Header = ({ count }: HeaderProps) => {
  return (
    <Container>
      <img src="" alt="" />
      <nav>
        <ul>
        <li>
            <Link to={"/"}>Menu</Link>
          </li>
          <li>Menu</li>
          <li>Horaires</li>
          <li>Payer</li>
          <li>Appeler le serveur</li>
          <li>
            <Link to={"/panier"}>Panier</Link>
          </li>
          <li style={{ backgroundColor: "red", color: "white " }}>{count}</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 1px solid black;
  text-align: center;

  & img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    
  }

  & ul {
    list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  }

  & li {
    float: left;
    display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: #111;
  }
`;
