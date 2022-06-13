import styles from "../styles/Header.module.css";
import React, { Component, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom";
import Draggable, { DraggableCore } from "react-draggable";

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    const conh = document.getElementById("con");
    conh.style.display = "none";
  };
  render() {
    const imgUrls = ["/dance/dance.gif", "/dance/dance2.gif", "/dance/dance3.gif"];
    const imgval = (Math.floor(Math.random() * imgUrls.length));
    const imgSrc = "/dance/dance.gif"
    return (
      <>
        <center>
          <div className={styles.Head}>
            <Draggable
              axis="x"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div className="handle">
                <img
                  src={imgUrls[imgval]}
                  className={styles.Bitmoji}
                  loading="lazy"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Drag This Emote!"
                />
              </div>
            </Draggable>
            <div className={styles.content}>
              <h1 className={styles.cute}>Hey,</h1>
              <h1 className={styles.title}>
                <span>Nice To Meet You!</span>
              </h1>
            </div>
            <h1 id="con" className={styles.continue}>
              Scroll Down
            </h1>
          </div>
        </center>
      </>
    );
  }
}
export default Header;
