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
