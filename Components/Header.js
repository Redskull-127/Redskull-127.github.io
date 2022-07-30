/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/Header.module.css";
import React, { Component, useState, useEffect } from "react";
import "aos/dist/aos.css";
import Draggable, { DraggableCore } from "react-draggable";
import firebase from "../Firebase/firebaseConf";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicLink: "",
      napsterLink: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    const remoteConfig = getRemoteConfig(firebase);
    remoteConfig.settings.minimumFetchIntervalMillis = 10000;
    remoteConfig.defaultConfig = {
      musicLink: "",
    };
    fetchAndActivate(remoteConfig)
      .then(() => {
        const musicval = getValue(remoteConfig, "musicLink").asString();
        this.setState({ musicLink: musicval });
      })
      .catch((err) => {
        console.log(err);
      });
    this.napSter()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const conh = document.getElementById("con");
    conh.style.display = "none";
  };

  napSter = () => {
    fetch(process.env.REACT_APP_NEPSTER)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ napsterLink: data.tracks[Math.floor(Math.random() * data.tracks.length)].previewURL });
      });
  };

  render() {
    let isPlaying = 1;
    const audioLink =
      typeof Audio !== "undefined" && new Audio( "https://" + (this.state.napsterLink).slice(7));
    const Play = () => {
      if (typeof Audio != "undefined") {
        audioLink.play();
        isPlaying = 0;
      }
    };
    const Stop = () => {
      audioLink.pause();
      isPlaying = 1;
    };
    const Playing = () => {
      if (isPlaying == 1) {
        Play();
      } else {
        Stop();
      }
    };
    const imgUrls = [
      "/dance/dance.gif",
      "/dance/dance2.gif",
      "/dance/dance3.gif",
    ];
    const imgval = Math.floor(Math.random() * imgUrls.length);
    const imgSrc = "/dance/dance.gif";
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
                  onClick={(e) => {
                    Playing();
                  }}
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
        {/* <svg src="/images/menuopen.svg" className={styles.menuopen}></svg> */}
        {/* <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.onClickHandler}
          id="openSVG"
          className={styles.menuopen}
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.onClickHandler2}
          id="closeSVG"
          style={{ display: "none" }}
          className={styles.menuopen}
          viewBox="0 0 30 30"
          width="24px"
          height="24px"
        >
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
        </svg> */}

        