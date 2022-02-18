import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import styles from "./Header.module.scss";

type HeaderPropsType = {
  onClickCart: any;
};

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={styles.header}>
      <Link to="/">
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
      </Link>
      <ul>
        <li className={styles.cart} onClick={props.onClickCart}>
          <img
            style={{ width: "18px", height: "18px" }}
            src="/img/cart.svg"
            alt="Корзина"
          />
          <span>1205 руб.</span>
        </li>
        <Link to="/favorites">
          <li className={styles.cart}>
            <img
              style={{ width: "18px", height: "18px" }}
              src="/img/heart.svg"
              alt="Закладки"
            />
          </li>
        </Link>
        <li>
          <img
            style={{ width: "18px", height: "18px" }}
            src="/img/user.svg"
            alt="Пользователь"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
