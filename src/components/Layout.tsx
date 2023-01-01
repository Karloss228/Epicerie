import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Content from "./Content";
import Header from "./Header";
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

const Layout = () => {
  const [count, setCount] = React.useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header count={count} />
          <PlatsContainer>
            {plats.map((item) => (
              <PlatCard
                maFonctionClick={incrementCount}
                key={item.name}
                {...item}
              />
            ))}
          </PlatsContainer>
        </>
      ),
    },
    {
      path: "/panier",
      element: (
        <>
          <Header count={count} />
          <div>Mon panier</div>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Layout;

const PlatsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
