import React from "react";
// @ts-ignore
import styles from "./Drawer.module.scss";
import GreenButton from "../GreenButton";

type DrawerPropsType = {
  onClose: any;
  items: any;
  onRemove: any;
};

const Drawer: React.FC<DrawerPropsType> = ({
  onClose,
  onRemove,
  items = [],
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className={styles.items}>
          {items.map((obj: any) => (
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className={styles.cartItemImg}
              ></div>

              <div className={styles.itemFlex}>
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
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
