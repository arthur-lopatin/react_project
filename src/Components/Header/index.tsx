import React from "react";
// @ts-ignore
import styles from "./Header.module.scss";

type HeaderPropsType = {
  onClickCart: any;
};

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          style={{ width: "40px", height: "40px" }}
          src="/img/logo.png"
          alt="Logo"
        />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul>
        <li className={styles.cart} onClick={props.onClickCart}>
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
            alt="User"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
