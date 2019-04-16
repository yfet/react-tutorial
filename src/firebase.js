import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import UserContext from "./components/UserContext";

const config = {
  apiKey: "AIzaSyDr9BdBruWpkl2X6-bFg2Yx7WE1B0KeQBY",
  authDomain: "react-tutorial-184a1.firebaseapp.com",
  databaseURL: "https://react-tutorial-184a1.firebaseio.com",
  projectId: "react-tutorial-184a1",
  storageBucket: "react-tutorial-184a1.appspot.com",
  messagingSenderId: "970091748057"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firebase;
export { firestore };
