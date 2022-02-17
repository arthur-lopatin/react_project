import React from "react";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";
import HeaderContent from "./Components/HeaderContent";

const App = () => {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
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

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <HeaderContent />
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
