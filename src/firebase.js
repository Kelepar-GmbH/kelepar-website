// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWUFP0c1Rb2Em1mlRvNyExVINA8n0Z4sc",
    authDomain: "kelepar-98e3a.firebaseapp.com",
    projectId: "kelepar-98e3a",
    storageBucket: "kelepar-98e3a.appspot.com",
    messagingSenderId: "42458949970",
    appId: "1:42458949970:web:712bfed15bc73af0d4328b",
    measurementId: "G-Y06GRTQ4H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);