import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAeXTty_KuxkCOWAIOZFhzVJHhwvW5sWOY",
    authDomain: "clone-81249.firebaseapp.com",
    databaseURL: "https://clone-81249-default-rtdb.firebaseio.com",
    projectId: "clone-81249",
    storageBucket: "clone-81249.appspot.com",
    messagingSenderId: "475241217106",
    appId: "1:475241217106:web:495d16e273d22b0378f38b",
    measurementId: "G-CGRR2KZYYN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };