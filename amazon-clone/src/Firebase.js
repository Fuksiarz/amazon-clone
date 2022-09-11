// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEsxMaaY8XyxMvUreDJfqm9Jd7YHRGhbs",
    authDomain: "clone-9d544.firebaseapp.com",
    projectId: "clone-9d544",
    storageBucket: "clone-9d544.appspot.com",
    messagingSenderId: "961417999234",
    appId: "1:961417999234:web:fa1ab0e266f060529f559b",
    measurementId: "G-L30P9VNVZ9"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};