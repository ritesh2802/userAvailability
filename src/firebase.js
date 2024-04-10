// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCciQUag5PI48jV9qALLbeRB-mpzATXGpE",
  authDomain: "user-availability-c8e1b.firebaseapp.com",
  projectId: "user-availability-c8e1b",
  storageBucket: "user-availability-c8e1b.appspot.com",
  messagingSenderId: "886902450769",
  appId: "1:886902450769:web:67634782a09f3a74406670",
  measurementId: "G-NT0G1TH9E8"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users')
}

export const storage = firebase.storage()