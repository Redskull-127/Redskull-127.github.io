import styles from "../styles/Header.module.css";
import React, { Component } from "react";
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
                src="/images/bitmojidance.gif"
                className={styles.Bitmoji}
                loading="lazy"
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
