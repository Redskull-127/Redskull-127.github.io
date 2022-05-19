import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import About from "../Components/About";
import Position from "../Components/Position";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <><div className={styles.container}>
      <Head>
        <title>Meer Tarbani</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/new/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <About />
        <Position />
        <Projects />
      </main>
    </div><Footer /></>
  );
}
