// const firebaseConfig = {
   
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGidyphkaZ9olDTUbaMIRuMijB7ge11w0",
    authDomain: "react-todo-3e10c.firebaseapp.com",
    projectId: "react-todo-3e10c",
    storageBucket: "react-todo-3e10c.appspot.com",
    messagingSenderId: "216768646633",
    appId: "1:216768646633:web:b5dda150701f831ebccf78"
})
const db = firebaseApp.firestore();
// const aut = firebase.auth();
export default db;
