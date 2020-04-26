import firebase from "firebase";
import "firebase/firestore";
import "firebase/firebase-storage";

// Your web app's Firebase configuration

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDdjvpeNmq2HWFH-9zqkslejQUMp7D36CM",
    authDomain: "capodicapi-c80bd.firebaseapp.com",
    databaseURL: "https://capodicapi-c80bd.firebaseio.com",
    projectId: "capodicapi-c80bd",
    storageBucket: "capodicapi-c80bd.appspot.com",
    messagingSenderId: "523947627761",
    appId: "1:523947627761:web:c0af8ae4ec9100bc638550",
    measurementId: "G-7HTFPMHVRN"
  });
}

export default firebase;
