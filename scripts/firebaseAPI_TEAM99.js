//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyAmDMVnQUjsHezPY2PGBSR7rNUyl5naelE",
    authDomain: "comp1800demo-21816.firebaseapp.com",
    projectId: "comp1800demo-21816",
    storageBucket: "comp1800demo-21816.appspot.com",
    messagingSenderId: "128518973457",
    appId: "1:128518973457:web:9d969d356176b1cafbe9b0",
    measurementId: "G-JGJ92ZWMBN"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
