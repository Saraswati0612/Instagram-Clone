import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB4VU6ik8EDxERQA_8ydFQEXgkavR3mH9g",
    authDomain: "instagram-clone-8d5a7.firebaseapp.com",
    databaseURL: "https://instagram-clone-8d5a7-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-8d5a7",
    storageBucket: "instagram-clone-8d5a7.appspot.com",
    messagingSenderId: "64155708897",
    appId: "1:64155708897:web:d483374f4a94ff4516b6a0",
    measurementId: "G-E2PSL7R75Z"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


//export default db;