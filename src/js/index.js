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

 //TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const fireBaseConfig = {
  apiKey: "AIzaSyD78_3SE_xqh5oC9o-bxUgBcXVpZHskvKE",
  authDomain: "aleco112.firebaseapp.com",
  projectId: "aleco112",
  storageBucket: "aleco112.appspot.com",
  messagingSenderId: "909997142636",
  appId: "1:909997142636:web:61db21b17f9f65df9dde49",
  measurementId: "G-3YN4B1LDF5"
} 
// Initialize Firebase
const app = initializeApp(fireBaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));


