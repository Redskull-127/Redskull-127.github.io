/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/About.module.css";
import emotes from "../styles/Emote.module.css";
import React, { Component, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom";

class About extends Component {
  render() {
    return (
        <><center>
          <main className={styles.About}>
            <h1 className={styles.title} data-aos="fade-up">
              About Me!
            </h1>
            <div className={styles.content} data-aos="fade-up">
              <p>
                Hey, Myself Meer Tarbani and Currently enrolled in Computer
                Application Field (BCA) at{" "}
                <a href="https://silveroakuni.ac.in">Silver Oak University.</a>{" "}
                Apart from my studies, I`m an Open-Source contributor at{" "}
                <a href="https://girlscript.tech">GirlScript!</a>
                <br />
                Also I`m lead of{" "}
                <a href="https://rdeclub.live">Palm Tree Club.</a>
              </p>
            </div>
            <img
              src="images/emote1.png"
              loading="lazy"
              data-aos="fade-down"
              className={emotes.emote} />
            <div>
              <h1 className={styles.title} data-aos="fade-up">
                Thing`s I Love!
              </h1>
              <div className={styles.tech} data-aos="fade-up">
                <img
                  loading="lazy"
                  data-aos="fade-down"
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-html-web-development-flaticons-lineal-color-flat-icons.png" />
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-css-no-code-flaticons-flat-flat-icons.png" />
                <img
                  loading="lazy"
                  data-aos="fade-down"
                  src="https://img.icons8.com/external-others-iconmarket/64/000000/external-js-file-types-others-iconmarket-4.png" />
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  src="https://img.icons8.com/external-flat-juicy-fish/48/000000/external-c-coding-and-development-flat-flat-juicy-fish.png" />
                <img
                  loading="lazy"
                  data-aos="fade-down"
                  src="https://img.icons8.com/color/48/000000/flutter.png" />
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  src="https://img.icons8.com/color/48/000000/google-cloud.png" />
                <img
                  loading="lazy"
                  data-aos="fade-down"
                  src="https://img.icons8.com/office/40/000000/react.png" />
                <img
                  loading="lazy"
                  data-aos="fade-up"
                  src="https://img.icons8.com/fluency/48/000000/python.png" />
              </div>
            </div>
          </main>
        </center></>
    );
  }
}

export default About;
