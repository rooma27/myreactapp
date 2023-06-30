import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Burger from "./1_Burger";

let MyBurger = () => (
    <Burger title="my burger">
      <Burger.Bun />
      <Burger.Cheese />
      <Burger.Salat />
      <Burger.Sauce />
      <Burger.Meat />
      <Burger.Bun />
    </Burger>
  );
export default MyBurger;

// ReactDOM.render(<MyBurger />, document.getElementById("root"));
