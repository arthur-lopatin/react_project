import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";

const App = () => {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get("https://620d589120ac3a4eedbe0c9a.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://620d589120ac3a4eedbe0c9a.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj: any) => {
    axios.post("https://620d589120ac3a4eedbe0c9a.mockapi.io/cart", obj);
    // @ts-ignore
    setCartItems((prev) => [...prev, obj]);
  };

  // @ts-ignore
  const onRemoveItem = (id) => {
    axios.delete(`https://620d589120ac3a4eedbe0c9a.mockapi.io/cart/${id}`);
    // @ts-ignore
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj: any) => {
    axios.post("https://620d589120ac3a4eedbe0c9a.mockapi.io/favorites", obj);
    // @ts-ignore
    setFavorites((prev) => [...prev, obj]);
  };

  // @ts-ignore
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/favorites">Test</Route>

      <div className="content">
        <div className="content_item">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
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
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={onAddToFavorite}
                onPlus={(obj: any) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
