import styles from "../styles/Projects.module.css";
import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
    redskull(){
        window.open('https://redskull.me/projects');
    }
  render() {
    return (
      <center>
          <h1 className={styles.title} data-aos="fade-up">Projects</h1>
          <div className={styles.Projects} data-aos="fade-up">
              <p>Get My All Projects{" "}</p>
              <button type="button" class="btn btn-warning" onClick={this.redskull}>Here</button>
          </div>
      </center>
    );
  }
}
export default Projects;