// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {auth} from 'firebase'
// import {firestore} from 'firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk2uzvWV7BenyxiqpdW17M7XMjQtYFqW0",
  authDomain: "ecommerce-pra.firebaseapp.com",
  projectId: "ecommerce-pra",
  storageBucket: "ecommerce-pra.appspot.com",
  messagingSenderId: "67406353702",
  appId: "1:67406353702:web:0dbc65ca93fd8a46191de7",
  measurementId: "G-LCYWG5ZYT2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };