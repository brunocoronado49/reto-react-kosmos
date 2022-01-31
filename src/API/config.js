import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5MPdYbJvvT3ZJewoonjmPishPkpTcIhw",
    authDomain: "react-61d36.firebaseapp.com",
    projectId: "react-61d36",
    storageBucket: "react-61d36.appspot.com",
    messagingSenderId: "581689868133",
    appId: "1:581689868133:web:972291211774523dd32b8c",
    measurementId: "G-MP4N7MGSG4"
};

initializeApp(firebaseConfig);
export const database = getFirestore();