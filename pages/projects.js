import styles from "../styles/MyProjects.module.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cards from "../components/Cards";

export default function MyProjects() {
  const router = useRouter();
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Redskull-127/Redskull-127.github.io/main/ProjectData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJsonData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  <Head>
    <title>Meer Tarbani</title>
    <meta name="description" content="Meer Tarbani Projects" />
    <meta
      name="keywords"
      content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, Projects,meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
    />
    <link rel="shortcut icon" href="/images/favicon.ico" />
  </Head>;

  function backHome() {
    router.push("/");
  }
  const Dataa = {
    title: "Meer Tarbani",
    description: "Meer Tarbani Projects",
    imageLink: "/images/meer-tarbani.png",
    Github: "",
    Download: "",
  };
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.NavBar}>
          <h1>My Projects</h1>
          <button
            type="button"
            onClick={backHome}
            className={`btn btn-warning ${styles.btn}`}
          >
            Home
          </button>
        </div>
        <div className={styles.Cards}>
          {jsonData != null ? (
            jsonData.map((data, id) => {
              return <Cards Data={data} key={id} />;
            })
          ) : (
            <div>Loading...</div>
          )}
          {/* <Cards Data={Dataa} /> */}
        </div>
      </div>
    </>
  );
}
