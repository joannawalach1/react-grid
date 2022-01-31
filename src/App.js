import React from "react";
import styled from "styled-components";
import Card from "./components/Card.js";
import "./App.css";

const data = [
  {
    name: "Alfred",
    surname: "Bogucki",
    avatar:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    background:
      "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    bronze: 1,
    silver: 3,
    gold: 1,
  },
  {
    name: "Andrzej",
    surname: "Mikucki",
    avatar:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    background:
      "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    bronze: 1,
    silver: 8,
    gold: 0,
  },
];

const Wrapper = styled.div`  
@media screen and (max-width: 1600px) {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-auto-flow: row;
  gap: 20px;
  justify-content:center;
}
@media screen and (max-width: 800px) {
  grid-template-columns: auto auto;
  grid-template-rows: auto;
}

@media screen and (max-width: 600px) {
  grid-template-columns: auto;
  grid-template-rows: auto auto;
}

@media screen and (max-width: 390px) {
  grid-template-columns: auto;
  grid-template-rows: auto auto;
}

`
function App() {
  return (
    <Wrapper>
      {data.map(({ name, surname, avatar, background, bronze, silver, gold }) => (
        <Card
          name={name}
          surname={surname}
          avatar={avatar}
          background={background}
          bronze={bronze}
          silver={silver}
          gold={gold}
        ></Card>
      ))}
    </ Wrapper>
  );
}

export default App;
