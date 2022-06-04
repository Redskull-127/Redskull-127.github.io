import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";
const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: "redskull-me.firebaseapp.com",
            projectId: "redskull-me",
            storageBucket: "redskull-me.appspot.com",
            messagingSenderId: "665630490828",
            appId: "1:665630490828:web:7ebeeaf81e97af87c84269",
            measurementId: "G-EVVLJ4X3ZM"
          };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const remoteConfig = getRemoteConfig(app);
        remoteConfig.settings.minimumFetchIntervalMillis = 10000;
        remoteConfig.defaultConfig = {
          testing: "not_working",
        };
        fetchAndActivate(remoteConfig)
          .then(() => {
            const val = getValue(remoteConfig, "testing").asString();
            console.log(val);
            testing.innerHTML = val;
          })
          .catch((err) => {
            console.log(err);
          });