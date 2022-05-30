import styles from "../styles/Projects.module.css";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
  redskull() {
    window.open("/projects");
  }
  binge() {
    window.open("https://redskull.me/BINGE");
  }
  maginwol() {
    window.open("https://github.com/Redskull-127/magicWOL");
  }
  passmanager() {
    window.open("https://redskull.me/Manager")
  }
  render() {
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
                onClick={this.binge}
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
                onClick={this.maginwol}
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
                onClick={this.passmanager}
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
            onClick={this.redskull}
          >
            Here
          </button>
        </div>
      </center>
    );
  }
}
export default Projects;
