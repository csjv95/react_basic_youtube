import React from "react";
import styles from "./search.module.css";
const Search = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="?">
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </a>
      
      <form className={styles.form}action="">
        <input className={styles.input} type="search" placeholder="Search" />
        <button className={styles.search_btn} type="submit">
          <img className={styles.btn_img} src="./images/search.png" alt="search" />
        </button>
      </form>
    </header>
  );
};

export default Search;
