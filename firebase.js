import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBnXwZa4A1ivw1L3i4WwsoevuHZg0ciy_Y",
    authDomain: "bi-geuna-woyoff.firebaseapp.com",
    projectId: "bi-geuna-woyoff",
    storageBucket: "bi-geuna-woyoff.appspot.com",
    messagingSenderId: "564463916458",
    appId: "1:564463916458:web:ee62f7dc31e56ae2bcc7d3",
    measurementId: "G-08BG7VP77Q"
};


const app = initializeApp(firebaseConfig);

export default firebase;