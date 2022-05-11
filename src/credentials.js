// Import the functions you need from the SDKs you need
import { fireBaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUT1RV2cy1oAeV9rwJkAyt6fm2snnnsH8",
  authDomain: "recipestemple-331f3.firebaseapp.com",
  projectId: "recipestemple-331f3",
  storageBucket: "recipestemple-331f3.appspot.com",
  messagingSenderId: "41886463137",
  appId: "1:41886463137:web:b0d05316f381fa15c76ce0"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
export default fireBaseApp;