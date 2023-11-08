// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtn0NxI9TVuqRmT91_QN94qBJi-XZLxGE",
    authDomain: "dark-pipe-400320.firebaseapp.com",
    projectId: "dark-pipe-400320",
    storageBucket: "dark-pipe-400320.appspot.com",
    messagingSenderId: "741712856462",
    appId: "1:741712856462:web:cd1106e1ba3462ca2390df",
    measurementId: "G-0V8KNF7SSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);