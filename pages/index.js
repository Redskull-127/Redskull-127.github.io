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

export default function Home() {
  const [device, setDevice] = useState(false);
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
          transform="translate(-32%, -10%) rotateZ(0deg)" />
      </>
      <div className={styles.container}>
      <Head>
        <title>Meer Tarbani</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main} id="mains">
        <Header />
        <About />        
        <img
          src="images/emote2.png"
          loading="lazy"
          data-aos="fade-down"
          className={emotes.emote} />
        <Position />
        <img
          src="images/emote3.png"
          loading="lazy"
          data-aos="fade-down"
          className={emotes.emote} />
        <Projects />
        <img
          src="images/emote4.png"
          loading="lazy"
          data-aos="fade-down"
          className={emotes.emote} />
        <Testing />
      </main>
    </div><Footer />
    </React.Fragment>
  );
}
