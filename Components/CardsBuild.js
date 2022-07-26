/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import prestyles from "../styles/Projects.module.css";
import styles from "../styles/Cards.module.css";

export default function Cards(Data) {

  function download() {
    window.open(Data.Data.Download);
  }
  return (
    <>
      <div className={styles.Container}>
        <div className={prestyles.card} data-aos="fade-right">
          <img
            src={Data.Data.imageLink}
            className={`card-img-top ${prestyles.projectimg}`}
            alt={Data.Data.title}
          />
          <div className="card-body">
            <p className={prestyles.cardp}>{Data.Data.title}</p>
            <br />
            <p className={prestyles.cardp}>
              {Data.Data.description} <a href={Data.Data.Github}>Github</a>
            </p>
            <button
              type="button"
              onClick={download}
              className={`btn btn-warning ${prestyles.btn}`}
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
