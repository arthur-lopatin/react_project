import React from "react";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";

const App = () => {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("https://620d589120ac3a4eedbe0c9a.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj: any) => {
    // @ts-ignore
    setCartItems((prev) => [...prev, obj]);
  };

  // @ts-ignore
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content_item">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj: any) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
