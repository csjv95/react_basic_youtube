import React, { useState } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    const searchValue = value;
    props.onSearch(searchValue);
  };

  const searchClick = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="?">
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </a>

      <form className={styles.form}>
        <input
          className={styles.input}
          type="search"
          value={value}
          onChange={onChange}
        />
        <button
          className={styles.search_btn}
          type="submit"
          onClick={searchClick}
        >
          <img
            className={styles.btn_img}
            src="./images/search.png"
            alt="search"
          />
        </button>
      </form>
    </header>
  );
};
export default Search;
