/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Projects.module.css";
import React, { Component, useEffect } from "react";
import { useRouter } from 'next/router'
import Aos from "aos";
import "aos/dist/aos.css";


export default function Projects() {

  const router = useRouter();

  function redskull() {
    router.push('/projects');
  }

  function binge() {
    // window.open("https://meertarbani.dev/BINGE");
    router.push('/BINGE')
  }
  function maginwol() {
    // window.open("https://github.com/Redskull-127/magicWOL");
    router.push('https://github.com/Redskull-127/magicWOL')
  }
  function passmanager() {
    // window.open("https://meertarbani.dev/Manager")
    router.push('/Manager')
  }
    return (
      <center>
        <h1 className={styles.title} data-aos="fade-up">
          Projects
        </h1>
        <div className={styles.projectsdiv} data-aos="fade-up">
          <div className={styles.card} data-aos="fade-right">
            <img
              src="https://github.com/Redskull-127/projects/blob/main/assets/images/binge.png?raw=true"
              className={`card-img-top ${styles.projectimg}`}
              alt="BINGE"
            />
            <div className="card-body">
              <p className={styles.cardp}>BINGE</p>
              <br />
              <p className={styles.cardp}>
                BINGE is a free app for watching Movies and Tv shows for Free!
                Code is Available on{" "}
                <a href="https://github.com/redskull-127/BINGE_APP">Github</a>
              </p>
              <button
                type="button"
                onClick={binge}
                className={`btn btn-warning ${styles.btn}`}
              >
                DOWNLOAD
              </button>
            </div>
          </div>

          <div className={styles.card} data-aos="fade-up">
            <img
              src="https://github.com/Redskull-127/projects/blob/main/assets/images/magic.png?raw=true"
              className={`card-img-top ${styles.projectimg}`}
              alt="Magic-WOL"
            />
            <div className="card-body">
              <p className={styles.cardp}>Magic-WOL</p>
              <br />
              <p className={styles.cardp}>
                Magic wakeup-on-lan app, helps you to wake your computer. Code
                is Available on{" "}
                <a href="https://github.com/Redskull-127/magicWOL">Github</a>
              </p>
              <button
                type="button"
                onClick={maginwol}
                className={`btn btn-warning ${styles.btn}`}
              >
                DOWNLOAD
              </button>
            </div>
          </div>

          <div className={styles.card} data-aos="fade-left">
            <img
              src="https://github.com/Redskull-127/projects/blob/main/assets/images/passmgr.png?raw=true"
              className={`card-img-top ${styles.projectimg}`}
              alt="Pass Manager"
            />
            <div className="card-body">
              <p className={styles.cardp}>Pass Manager</p>
              <br />
              <p className={styles.cardp}>
              Pass Manager helps you to keep your passwords secure! Code is Available on {" "}
                <a href="https://github.com/Redskull-127/Manager">Github</a>
              </p>
              <button
                type="button"
                onClick={passmanager}
                className={`btn btn-warning ${styles.btn}`}
              >
                VISIT
              </button>
            </div>
          </div>

        </div>
        <div className={styles.Projects} data-aos="fade-up">
          <p>Get My All Projects </p> <br />
          <button
            type="button"
            className="btn btn-warning"
            onClick={redskull}
          >
            Here
          </button>
        </div>
      </center>
    );
}
