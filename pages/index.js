import Head from "next/head";
import styles from "../styles/Home.module.css";
import emotes from "../styles/Emote.module.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Position from "../Components/Position";
import Projects from "../Components/Projects";
import Testing from "../Components/Testing";
import Footer from "../Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, Component } from "react";
import { CustomCursor } from "react-svg-cursor";
import Quote from "../Components/Quote";

export default function Home() {
  const [device, setDevice] = useState(false);
  // const [scale, setScale] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    var userAgent = navigator.userAgent.toLowerCase();
    var Android = userAgent.indexOf("android") > -1;
    if (Android) {
      setDevice(true);
    }
  }, []);

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
          <Header />
          <About />
          <img
            src="images/emote2.png"
            loading="lazy"
            data-aos="fade-down"
            className={emotes.emote}
          />
          <Position />
          <img
            src="images/emote3.png"
            loading="lazy"
            data-aos="fade-down"
            className={emotes.emote}
          />
          <Projects />
          <img
            src="images/emote4.png"
            loading="lazy"
            data-aos="fade-down"
            className={styles.emote4}
          />
          <Quote />
          {/* <Space /> */}
          <Testing />
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
