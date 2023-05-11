// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAsYz1t3BtAaPNR5rD5GKQquKWAACpg8g",
  authDomain: "lahiye5.firebaseapp.com",
  databaseURL: "https://lahiye5-default-rtdb.firebaseio.com",
  projectId: "lahiye5",
  storageBucket: "lahiye5.appspot.com",
  messagingSenderId: "518045732618",
  appId: "1:518045732618:web:be77a51feec01ffc33f4f3",
  measurementId: "G-5JYJFX483J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)