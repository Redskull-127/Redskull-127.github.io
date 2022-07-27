import styles from "../styles/Testing.module.css";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";
import react, { useEffect, useState } from "react";
import firebase from "../Firebase/firebaseConf";

const Testing = () => {
  // console.log(process.env)
  const [data, setData] = useState("");
  const [music, setMusic] = useState("");
  useEffect(() => {
    
    const remoteConfig = getRemoteConfig(firebase);
    remoteConfig.settings.minimumFetchIntervalMillis = 10000;
    remoteConfig.defaultConfig = {
      testing: "not_working",
      musicLink: "",
    };
    fetchAndActivate(remoteConfig)
      .then(() => {
        const testing = document.getElementById('testing');
        const val = getValue(remoteConfig, "testing").asString();
        const musicval = getValue(remoteConfig, "musicLink").asString();
        testing.innerHTML = val;
        setData(process.env.REACT_APP_FIREBASE_API_KEY);
        setMusic(musicval);
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
