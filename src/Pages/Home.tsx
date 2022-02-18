import React from "react";
import Card from "../Components/Card";

const Home: React.FC<any> = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) => {
  return (
    <div className="content">
      <div className="content_item">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clearBtn"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex">
        {items
          .filter((item: any) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item: any, index: any) => (
            <Card
              key={index}
              onFavorite={onAddToFavorite}
              onPlus={(obj: any) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
