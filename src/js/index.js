//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
// firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const fireBaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.projectId,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
}
console.log(fireBaseConfig)
// Initialize Firebase
//const app = initializeApp(fireBaseConfig);
//const analytics = getAnalytics(app);
//const auth = getAuth(app)
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));


