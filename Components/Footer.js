import styles from "../styles/Footer.module.css";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

class Footer extends Component {
  gmail() {
    window.open("mailto:redskull@duck.com");
  }
  instagram() {
    window.open("https://instagram.com/127.0.0.1.exe");
  }
  linkedin() {
    window.open("https://www.linkedin.com/in/meer-tarbani-225243216");
  }
  render() {
    return (
      <div className={styles.Footer}>
        <h1>Connect with me...</h1>
        <div className={styles.imgs}>
          <img loading="lazy" onClick={this.gmail} src="https://img.icons8.com/color/48/undefined/gmail-new.png" />
          <img loading="lazy" onClick={this.linkedin} src="https://img.icons8.com/color/48/undefined/linkedin-circled--v1.png" />
          <img loading="lazy" onClick={this.instagram} src="https://img.icons8.com/fluency/48/undefined/instagram-new.png" />
        </div>
      </div>
    );
  }
}

export default Footer;
