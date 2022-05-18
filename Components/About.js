import styles from "../styles/About.module.css";
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <center>
        <main className={styles.About}>
          <h1 className={styles.title}>About Me!</h1>
          <div className={styles.content}>
            <p>
              Hey, Myself Meer Tarbani and Currently enrolled in Computer
              Application Field (BCA) at{" "}
              <a href="https://silveroakuni.ac.in">Silver Oak University.</a>{" "}
              Apart from my studies, I`m an Open-Source contributor at{" "}
              <a href="https://girlscript.tech" >
                GirlScript!
              </a>
              <br />
              Also I`m lead of <a href="rdeclub.live">Palm Tree Club.</a>
            </p>
          </div>
          <h1 className={styles.title}>Thing`s I Love!</h1>
          <div className={styles.tech}>
            <img loading="lazy" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-html-web-development-flaticons-lineal-color-flat-icons.png"/>
            <img loading="lazy" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-css-no-code-flaticons-flat-flat-icons.png" />
            <img loading="lazy" src="https://img.icons8.com/external-others-iconmarket/64/000000/external-js-file-types-others-iconmarket-4.png" />
            <img loading="lazy" src="https://img.icons8.com/external-flat-juicy-fish/48/000000/external-c-coding-and-development-flat-flat-juicy-fish.png"/>
            <img loading="lazy" src="https://img.icons8.com/color/48/000000/flutter.png"/>
            <img loading="lazy" src="https://img.icons8.com/color/48/000000/google-cloud.png"/>
            <img loading="lazy" src="https://img.icons8.com/office/40/000000/react.png" />
            <img loading="lazy" src="https://img.icons8.com/fluency/48/000000/python.png"/>
          </div>
        </main>
      </center>
    );
  }
}

export default About;
