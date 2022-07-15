/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-page-custom-font */
import styles from "../styles/Footer.module.css";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

class Footer extends Component {
  gmail() {
    window.open("mailto:admin@meertarbani.dev");
  }
  linkedin() {
    window.open("https://www.linkedin.com/in/meer-tarbani-225243216");
  }
  twitter() {
    window.open("https://twitter.com/meertarbani");
  }
  render() {
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.Footer}>
          <h1>Connect with me...</h1>
          <div className={styles.imgs}>
            <img
              loading="lazy"
              onClick={this.gmail}
              src="gifs/gmail.gif"
            />
            <img
              loading="lazy"
              onClick={this.linkedin}
              src="gifs/linkedin.gif"
            />
            <img
              loading="lazy"
              onClick={this.twitter}
              src="gifs/twitter.gif"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
