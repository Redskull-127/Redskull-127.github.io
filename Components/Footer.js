import styles from "../styles/Footer.module.css";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

class Footer extends Component {
    gmail(){
        window.open('mailto:redskull@duck.com');
    }
    instagram(){
        window.open('https://instagram.com/127.0.0.1.exe');
    }
    linkedin(){
        window.open('https://www.linkedin.com/in/meer-tarbani-225243216');
    }
    render() {
        return (
          <div className={styles.Footer} >
              <h1>Connect With Me...</h1>
              <div className={styles.media}>
                  <img loading="lazy" src="/redskull-127.github.io/images/gmail.gif" onClick={this.gmail}/>
                  <img loading="lazy" src="/redskull-127.github.io/images/instagram.gif" onClick={this.instagram}/>
                  <img loading="lazy" src="/redskull-127.github.io/images/linkedin.gif" onClick={this.linkedin}/>
              </div>
          </div>
    );
  }
}

export default Footer;