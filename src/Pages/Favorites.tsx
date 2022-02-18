import React from "react";
import Card from "../Components/Card";

const Favorites: React.FC<any> = ({ items, onAddToFavorite }) => {
  return (
    <div className="content">
      <div className="content_item">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex">
        {items.map((item: any, index: any) => (
          // @ts-ignore
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
