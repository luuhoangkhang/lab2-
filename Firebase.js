// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr4xgQAf9d_XMskxxvk52pbYDOf2LHmbI",
  authDomain: "project-1-2c076.firebaseapp.com",
  projectId: "project-1-2c076",
  storageBucket: "project-1-2c076.appspot.com",
  messagingSenderId: "397477925778",
  appId: "1:397477925778:web:3545516684216000f2e74b",
  measurementId: "G-B12P8ZYXKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);