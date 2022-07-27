/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from "../styles/CurrentPlaying.module.css";
import React, { useEffect, useState, Component } from "react";
import firebase from "../Firebase/firebaseConf";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";

export default function CurrentPlaying() {
  const [currentPlaying, setCurrentPlaying] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);
  const [currentUrl, setCurrentUrl] = useState([]);
  const [currentArtist, setCurrentArtist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [spotifyAPI, setSpotifyAPI] = useState("");
  useEffect(() => {
    const remoteConfig = getRemoteConfig(firebase);
    remoteConfig.settings.minimumFetchIntervalMillis = 10000;
    remoteConfig.defaultConfig = {
      spotify: "",
    };
    fetchAndActivate(remoteConfig)
      .then(() => {
        const val = getValue(remoteConfig, "spotify").asString();
        setSpotifyAPI(val);
        
        
      })
      .catch((err) => {
        console.log(err);
      });


      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer BQDl0NpgXrMmOkXrbSfxKwQG_2oWaClgzfSU9Mw30LLzYTMukT0fa9Wwqe0SjaOSjBy1knTJc_sRQC4V-0D0_UcDYsWjO-KuCfO7UasX-DQka_1dZjFGrEDJJuSGEIeaDiK76SaD8g3aXk7KqY1hBquFsEigVEQovI73tn3xAFvqu9H-xH4UXHI_Ak8V_GQq4D0O",
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then((data) => {
            setCurrentPlaying(JSON.stringify(data.item.name));
            setCurrentImage(data.item.album.images[1].url);
            setCurrentUrl(data.item.external_urls.spotify);
            setLoading(false);
            setIsPlaying(data.is_playing);
            setCurrentArtist(data.item.artists);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });


  }, []);

  function HandleOnClick(e) {
    e.preventDefault();
    window.open(currentUrl, "_blank");
  }

  return (
    <>
      {loading ? null : (
        <div className={style.current}>
          <>{isPlaying ? <h1>Now Playing</h1> : <h1>Was Listening</h1>}</>
          <div className={style.details}>
            {currentArtist.map((artist, key) => (
              <h1 key={key}>{currentPlaying} - {artist.name}</h1>
            ))}
            <img
              src={currentImage}
              title="Click To Play"
              onClick={HandleOnClick}
            />
          </div>
        </div>
      )}
    </>
  );
}
