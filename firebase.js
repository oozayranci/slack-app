/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJkMltGia0VMe4xNr5lLWYMU8nlSWGhAQ",
    authDomain: "slack-clone-2bd90.firebaseapp.com",
    projectId: "slack-clone-2bd90",
    storageBucket: "slack-clone-2bd90.appspot.com",
    messagingSenderId: "477626045840",
    appId: "1:477626045840:web:c6fc2b0e42330e15af8f15"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db };