import React from "react";
// @ts-ignore
import styles from "./GreenButton.module.scss";

const GreenButton: React.FC = () => {
  return (
    <button className={styles.greenButton}>
      Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
    </button>
  );
};

export default GreenButton;
