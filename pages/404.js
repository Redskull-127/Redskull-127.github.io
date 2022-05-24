import styles from "../styles/404.module.css";
import Head from "next/head";

export default function Custom404() {
   return(
       <>
        <div className={styles.error}>
       <Head>
          <title>Error Occured!</title>
          <meta name="description" content="Portfolio Website" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
            <img loading="lazy" src="/images/error.png"/>
            <h1>An unknown error occured!</h1>
        </div>
       </>
   )
}