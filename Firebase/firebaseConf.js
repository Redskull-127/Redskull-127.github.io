import firebase from 'firebase/compat/app';
const conf = {
  apiKey: process.env.REACT_APP_FIREBASEAPI,
  authDomain: process.env.REACT_APP_FIREBASEAUTH,
  projectId: "redskull-me",
  storageBucket: "redskull-me.appspot.com",
  messagingSenderId: "665630490828",
  appId: "1:665630490828:web:7ebeeaf81e97af87c84269",
  measurementId: "G-EVVLJ4X3ZM",
};

export default !firebase.apps.length ? firebase.initializeApp(conf) : firebase.app();
// export default !firebase.initializeApp(conf) ? firebase.app() : firebase.app();