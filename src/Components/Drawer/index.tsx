import React from "react";
// @ts-ignore
import styles from "./Drawer.module.scss";
import GreenButton from "../GreenButton";

const Drawer: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина{" "}
          <img
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className={styles.items}>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
              className={styles.cartItemImg}
            ></div>

            <div className={styles.itemFlex}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/4.jpg)" }}
              className={styles.cartItemImg}
            ></div>

            <div className={styles.itemFlex}>
              <p>Кроссовки Puma X Aka Boku Future Rider</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Скидка 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <GreenButton />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
