/* eslint-disable @next/next/no-img-element */
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
            <h1>GDSC Lead</h1>
            <img loading="lazy" src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg" alt="GDSC" onClick={(e)=>{window.open('https://gdsc.community.dev/')}} />
        </div>
      </center>
    );
  }
}
export default Position;
