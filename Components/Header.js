import styles from "../styles/Header.module.css";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <center>
          <div className={styles.Head}>
            <img src="/images/bitmoji.png" className={styles.Bitmoji} />
            <div className={styles.content}>
              <h1 className={styles.cute}>Hey,</h1>
              <h1 className={styles.title}><span>Nice To Meet You!</span></h1>
            </div>
          </div>
        </center>
      </>
    );
  }
}
export default Header;
