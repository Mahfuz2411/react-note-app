// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB8FAm6DHsBx96ZWOjbMSjOQWKrqdix4To",
  authDomain: "react-note-app-68bd9.firebaseapp.com",
  projectId: "react-note-app-68bd9",
  storageBucket: "react-note-app-68bd9.appspot.com",
  messagingSenderId: "1049939976987",
  appId: "1:1049939976987:web:050b0d31cab59cb6d329be",
  measurementId: "G-Y4RHT9HG2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default auth;