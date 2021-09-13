import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCvsaNHQjYzUo7sLfS3Q4DMgTZNECuI9Ig",
    authDomain: "clone-598b5.firebaseapp.com",
    projectId: "clone-598b5",
    storageBucket: "clone-598b5.appspot.com",
    messagingSenderId: "868623785092",
    appId: "1:868623785092:web:657fa158a524f9d70176d1"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {db,auth};
