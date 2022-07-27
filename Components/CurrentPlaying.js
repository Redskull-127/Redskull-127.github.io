/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from "../styles/CurrentPlaying.module.css";
import React, { useEffect, useState, Component } from "react";

export default function CurrentPlaying() {
  const [currentPlaying, setCurrentPlaying] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);
  const [currentUrl, setCurrentUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer BQBoGgoV0duNH3X4GraSppHF-OkR-tbZWRHvRHN2qRgAXcpHBQkZkfN6eEjzjxBlTm5pZwnloFdRGkhb3D49Ifkv02qp2gcv8DUNY8I2Boe41MHn30d28M8a67EZ2GDZY7qUWEQOXgX1FR1siyx0V0f44ercVAv0PFnmmEPlWzsalMsyHFWJKx4wYgVTVDw4ijYy",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentPlaying(JSON.stringify(data.item.name));
        setCurrentImage(data.item.album.images[1].url);
        setCurrentUrl(data.item.external_urls.spotify);
        setLoading(false);
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={style.current}>
          <h1>Current Playing</h1>
          <div className={style.details}>
          <h1>{currentPlaying}</h1>
          <img src={currentImage} title="Click To Play" onClick={HandleOnClick}/>
          </div>
        </div>
      )}
    </>
  );
}
