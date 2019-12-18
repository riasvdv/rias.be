import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";

const firebaseConfig = {
    apiKey: "AIzaSyBelUTDyEQi9fLGcCEcKr_fVfcVdOhB8Lc",
    authDomain: "rias-be.firebaseapp.com",
    databaseURL: "https://rias-be.firebaseio.com",
    projectId: "rias-be",
    storageBucket: "",
    messagingSenderId: "1010390235393",
    appId: "1:1010390235393:web:10fad5de0ab936071cc300",
    measurementId: "G-WWNY9V4E85",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance();

export default firebase;
