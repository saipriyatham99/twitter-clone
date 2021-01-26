import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtROBilcH2PVNs_-radkfubAOwq2yNZsw",
  authDomain: "timine.firebaseapp.com",
  databaseURL: "https://timine.firebaseio.com",
  projectId: "timine",
  storageBucket: "timine.appspot.com",
  messagingSenderId: "389396624696",
  appId: "1:389396624696:web:f3ae815247d3bf7d1cbdcd",
  measurementId: "G-FH954KL53R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
