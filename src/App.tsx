import React from "react";
import Header from "./Components/Header";
// import Card from "./Components/Card";

const App = () => {
  return (
    <div className="wrapper clear">
      <Header />
      <div className="content">
        <div className="content_item">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
