// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC1FJvLy9UtMVl7UgWK2Uv4eLPr1fV4hCI",
    authDomain: "essentials-dee90.firebaseapp.com",
    projectId: "essentials-dee90",
    storageBucket: "essentials-dee90.appspot.com",
    messagingSenderId: "805049153557",
    appId: "1:805049153557:web:5d6f441d7175ca8a53f61c",
    measurementId: "G-JFTTLTRPSK"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };