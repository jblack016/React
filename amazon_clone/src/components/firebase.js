// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDdJFjDhAa_m8W29FScWiOhYMEtuOYCKJM",
    authDomain: "ish-e88f7.firebaseapp.com",
    projectId: "ish-e88f7",
    storageBucket: "ish-e88f7.appspot.com",
    messagingSenderId: "742956532551",
    appId: "1:742956532551:web:1ab47e7b4391047c9e0262",
    measurementId: "G-G6PDVXCPV9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);


export { db, auth, storage };