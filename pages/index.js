import Head from "next/head";
import styles from "../styles/Home.module.css";
import emotes from "../styles/Emote.module.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Position from "../Components/Position";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, Component } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Head>
          <title>Meer Tarbani</title>
          <meta name="description" content="Portfolio Website" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Header />
          <About />
          <img src="images/emote2.png" loading="lazy" data-aos="fade-down" className={emotes.emote}/>
          <Position />
          <img src="images/emote3.png" loading="lazy" data-aos="fade-down" className={emotes.emote}/>
          <Projects />
          <img src="images/emote4.png" loading="lazy" data-aos="fade-down" className={emotes.emote}/>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
