// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOl4ik3f99ZmcStpGAOGKci2M8d_PE6xc",
    authDomain: "sexologie-luzern.firebaseapp.com",
    projectId: "sexologie-luzern",
    storageBucket: "sexologie-luzern.appspot.com",
    messagingSenderId: "1049645928196",
    appId: "1:1049645928196:web:d519be25c96117407bca51",
    measurementId: "G-QDJV1N8GCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);