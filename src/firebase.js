import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import UserContext from "./components/UserContext";

const config = {};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firebase;
export { firestore };
