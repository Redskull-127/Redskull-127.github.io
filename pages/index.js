import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import About from '../Components/About'
import reveal from '../Components/Animation'
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Meer Tarbani</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/new/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <Header />
      <reveal>
      <About />
      </reveal>
      
      </main>
    </div>
  )
}
