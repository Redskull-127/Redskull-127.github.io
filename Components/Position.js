import styles from "../styles/Positions.module.css";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

class Position extends Component {
  render() {
    return (
      <center>
          <h1 className={styles.title} data-aos="fade-up">Current Position</h1>
        <div className={styles.Position} data-aos="fade-up">
            <h1>Open-Source Contributor At</h1>
            <img loading="lazy" src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Navbar%20logo/GS_logo_Black1.png?raw=true"/>
        </div>
      </center>
    );
  }
}
export default Position;
