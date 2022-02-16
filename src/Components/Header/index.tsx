import React from "react";
// @ts-ignore
// import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          style={{ width: "40px", height: "40px" }}
          src="/img/logo.png"
          alt="Logo"
        />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p">
          <img
            style={{ width: "18px", height: "18px" }}
            src="/img/cart.svg"
            alt="Cart"
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <img
            style={{ width: "18px", height: "18px" }}
            src="/img/user.svg"
            alt="userLogo"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
