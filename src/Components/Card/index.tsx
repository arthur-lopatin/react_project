import React from "react";
// @ts-ignore
import styles from "./Card.module.scss";

type CardPropsType = {
  title: string;
  price: number;
  imageUrl: string;
  onClickFavorite: any;
  onClickPlus: any;
};

const Card: React.FC<CardPropsType> = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card} onClick={props.onClickFavorite}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img
        style={{ width: "133px", height: "112px" }}
        src={props.imageUrl}
        alt="Sneakers"
      />
      <h5>{props.title}</h5>
      <div className={styles.cardItem}>
        <div className={styles.cardItemFlex}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        ></img>
      </div>
    </div>
  );
};

export default Card;
