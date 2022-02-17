import React from "react";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Card from "./Components/Card";

const App = () => {
  const [cartOpened, setCartOpened] = React.useState(false);
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

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content_item">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onClickPlus={() => console.log("Нажали на плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
