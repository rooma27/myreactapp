import React from "react";

const Burger = ({ title, children }) => (
  <div className="burger">
    <h2 title={title} className="burger__title">
      {title}
    </h2>
    {children}
  </div>
);

Burger.Cheese = () => <p className="burger__cheese">cheese</p>;
Burger.Meat = () => <p className="burger__meat">meat</p>;
Burger.Salat = () => <p className="burger__salat">salat</p>;
Burger.Sauce = () => <p className="burger__sauce">sauce</p>;
Burger.Bun = () => <p className="burger__bun">bun</p>;

export default Burger;
