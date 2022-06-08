import styles from "../styles/Space.module.css";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Space() {
    const [names, setNames] = useState("Waiting for data...");
    const [crafts, setCrafts] = useState("Waiting for data...");
    // const [random, setRandom] = useState("Waiting for data...");
  useEffect(() => {
    datas();
  }, []);
  const Api = "http://api.open-notify.org/astros.json";
  function datas() {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let rand = Math.floor(Math.random() * data.number);
        setNames(data.people[rand].name);
        setCrafts(data.people[rand].craft);
      });
  }
  if(names != null){
    return (
        <div className={styles.Space}>
            <h1>People In Space RN! 👩‍🚀</h1>
            <br/>
            <h1>{names} is in space</h1>
            <h1>at {crafts} 🚀</h1>
        </div>
    );
  }
}
