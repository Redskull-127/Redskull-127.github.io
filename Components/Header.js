import styles from "../styles/Header.module.css";
import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

class Header extends Component {
  render() {
    return (
      <>
        <center>
          <div className={styles.Head}>
            <img src="/new/images/bitmoji.png" className={styles.Bitmoji} />
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
