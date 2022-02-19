import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

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
    axios
      .get("https://620d589120ac3a4eedbe0c9a.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj: any) => {
    // @ts-ignore
    if (cartItems.find((item) => item.id === obj.id)) {
      // @ts-ignore
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios
        .post("https://620d589120ac3a4eedbe0c9a.mockapi.io/cart", obj)
        // @ts-ignore
        .then((res) => setCartItems((prev) => [...prev, res.data]));
    }
  };

  // @ts-ignore
  const onRemoveItem = (id) => {
    axios.delete(`https://620d589120ac3a4eedbe0c9a.mockapi.io/cart/${id}`);
    // @ts-ignore
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj: any) => {
    // @ts-ignore
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://620d589120ac3a4eedbe0c9a.mockapi.io/favorites/${obj.id}`
      );
    } else {
      const { data } = await axios.post(
        "https://620d589120ac3a4eedbe0c9a.mockapi.io/favorites",
        obj
      );
      // @ts-ignore
      setFavorites((prev) => [...prev, data]);
    }
  };

  // @ts-ignore
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      <Drawer
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}
        opened={cartOpened}
      />
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
};

export default App;
