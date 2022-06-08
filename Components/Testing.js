import styles from "../styles/Testing.module.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";
import react, { useEffect, useState } from "react";

const Testing = () => {
  // console.log(process.env)
  const [data, setData] = useState("");
  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASEAPI,
      authDomain: process.env.REACT_APP_FIREBASEAUTH,
      projectId: "redskull-me",
      storageBucket: "redskull-me.appspot.com",
      messagingSenderId: "665630490828",
      appId: "1:665630490828:web:7ebeeaf81e97af87c84269",
      measurementId: "G-EVVLJ4X3ZM",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const perf = getPerformance(app);
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 10000;
    remoteConfig.defaultConfig = {
      testing: "not_working",
    };
    fetchAndActivate(remoteConfig)
      .then(() => {
        const testing = document.getElementById('testing');
        const val = getValue(remoteConfig, "testing").asString();
        console.log(val);
        testing.innerHTML = val;
        setData(process.env.REACT_APP_FIREBASE_API_KEY);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.testing}>
      <h1 id="testing">Loading</h1>
      <h1 id="toolip">{data}</h1>
    </div>
  );
};

export default Testing;