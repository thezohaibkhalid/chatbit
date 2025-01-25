// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getauth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDesKtwO_Gaz3mLXyHvh_WBmw3vzkn6jZw",
  authDomain: "reactchat-e3b02.firebaseapp.com",
  projectId: "reactchat-e3b02",
  storageBucket: "reactchat-e3b02.firebasestorage.app",
  messagingSenderId: "767185800653",
  appId: "1:767185800653:web:6221369595e853ac2a4884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getauth()
export const db = getFirestore()