import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBoDQ017dwE0sobjrw_E88izuxa6rBT-kw",
    authDomain: "reacttest-76b65.firebaseapp.com",
    projectId: "reacttest-76b65",
    storageBucket: "reacttest-76b65.appspot.com",
    messagingSenderId: "474237114987",
    appId: "1:474237114987:web:de6ce1fb1a8fe98fa9ef2e",
    measurementId: "G-KH61G2H0H1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;