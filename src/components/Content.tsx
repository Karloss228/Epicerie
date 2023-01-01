import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import styled from "styled-components";
import PlatCard from "./PlatCard";

const plats = [
  {
    name: "Risotto blanc",
    price: "100",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
  {
    name: "Risotto gris",
    price: "50",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
  {
    name: "Risotto rouge",
    price: "20",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
  {
    name: "Risotto noir",
    price: "500",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
];

interface ContentProps {
  handleCardClick: () => void;
}

const Content = ({ handleCardClick }: ContentProps) => {
  return <main></main>;
};

export default Content;

const PlatsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
