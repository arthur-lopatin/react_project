import React from "react";
// @ts-ignore
import styles from "./HeaderContent.module.scss";

const HeaderContent: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  // @ts-ignore
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.content_item}>
      <h1>
        {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
      </h1>
      <div className={styles.search_block}>
        <img src="/img/search.svg" alt="Search" />
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          placeholder="Поиск..."
        />
        {searchValue && (
          <img
            onClick={() => setSearchValue("")}
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        )}
      </div>
    </div>
  );
};

export default HeaderContent;
