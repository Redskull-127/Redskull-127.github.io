/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import emotes from "../styles/Emote.module.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Position from "../Components/Position";
import Projects from "../Components/Projects";
import CurrentPlaying from "../Components/CurrentPlaying";
import Testing from "../Components/Testing";
import Footer from "../Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, Component } from "react";
import { CustomCursor } from "react-svg-cursor";
import Quote from "../Components/Quote";
import HeaderStyles from "../styles/Header.module.css";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const [device, setDevice] = useState(false);
  // const [scale, setScale] = useState(1);
  useEffect(() => {
    var Tynt = Tynt || [];
    Tynt.push("aR694qa3yr7BKorkHcnnVW");
    (function () {
      var h,
        s = document.createElement("script");
      s.src = "https://cdn.tynt.com/ti.js";
      h = document.getElementsByTagName("script")[0];
      h.parentNode.insertBefore(s, h);
    })();
    Aos.init({ duration: 2000 });
    var userAgent = navigator.userAgent.toLowerCase();
    var Android = userAgent.indexOf("android") > -1;
    var iOS = userAgent.indexOf("iphone") > -1;
    if (Android || iOS) {
      setDevice(true);
    }
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    const openSVG = document.getElementById("openSVG");
    const closeSVG = document.getElementById("closeSVG");
    const container = document.getElementById("container");
    const headdiv = document.getElementById("headdiv");
    openSVG.style.display = "none";
    openSVG.style.transition = "all 0.5s ease-in-out";
    closeSVG.style.transition = "all 0.5s ease-in-out";
    closeSVG.style.display = "block";
    container.style.display = "flex";
    container.style.left = "65%";
    container.style.top = "50%";
    container.style.transform = "translate(50%, -65%)";
    container.style.zIndex = "11";
    headdiv.style.transition = "all 0.5s ease-in-out";
    headdiv.style.marginRight = "50%";
  };

  const onClickHandler2 = (e) => {
    e.preventDefault();
    const openSVG = document.getElementById("openSVG");
    const closeSVG = document.getElementById("closeSVG");
    const container = document.getElementById("container");
    const headdiv = document.getElementById("headdiv");
    openSVG.style.transition = "all 0.5s ease-in-out";
    closeSVG.style.transition = "all 0.5s ease-in-out";
    openSVG.style.display = "block";
    closeSVG.style.display = "none";
    container.style.display = "none";
    headdiv.style.marginRight = "0px";
  };

  return (
    <React.Fragment>
      <>
        <CustomCursor
          component={"images/cursor2.png"}
          isDisabled={device}
          width={50}
          height={50}
          zIndex={420}
          transform="translate(-32%, -10%) rotateZ(0deg)"
        />
      </>
      <div className={styles.container}>
        <Head>
          <title>Meer Tarbani</title>
          <meta name="description" content="Meer Tarbani Portfolio Website" />
          <meta
            name="keywords"
            content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
          />
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <main className={styles.main} id="mains">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            id="openSVG"
            className={HeaderStyles.menuopen}
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            onClick={onClickHandler}
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
          </svg>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            id="closeSVG"
            style={{ display: "none" }}
            className={HeaderStyles.menuopen}
            viewBox="0 0 30 30"
            width="24px"
            height="24px"
            onClick={onClickHandler2}
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
          </svg>
          <div
            className={HeaderStyles.container}
            style={{ display: "none" }}
            id="container"
          >
            <h1>
              <Link
                activeClass="active"
                to="aboutdiv"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </h1>
            <h1>
            <Link
                activeClass="active"
                to="positiondiv"
                smooth={true}
                duration={500}
              >
              Work
            </Link>
            </h1>
            <h1>
            <Link
                activeClass="active"
                to="positiondiv"
                smooth={true}
                duration={500}
              >
              Projects
            </Link>
            </h1>
            <h1>
            <Link
                activeClass="active"
                to="contactdiv"
                smooth={true}
                duration={500}
              >
              Contact
            </Link>
              </h1>
          </div>
          <div id="headdiv">
            <Header />
          </div>
          <div id="aboutdiv">
            <About />
          </div>
          <img
            src="images/emote2.png"
            loading="lazy"
            data-aos="fade-down"
            className={emotes.emote}
          />
          <div id="positiondiv">
          <Position />
          </div>
          <img
            src="images/emote3.png"
            loading="lazy"
            data-aos="fade-down"
            className={emotes.emote}
          />
          <div id="projectdiv">
          <Projects />
          </div>
          <img
            src="images/emote4.png"
            loading="lazy"
            data-aos="fade-down"
            className={styles.emote4}
          />
          <Quote />
          {/* <Space /> */}
          <CurrentPlaying />
          <div id="contactdiv">
          <Testing />
          </div>
        </main>
      </div>
      <div
        onMouseEnter={(e) => {
          setDevice(true);
        }}
        onMouseLeave={(e) => {
          setDevice(false);
        }}
      >
        <Footer />
      </div>
    </React.Fragment>
  );
}
