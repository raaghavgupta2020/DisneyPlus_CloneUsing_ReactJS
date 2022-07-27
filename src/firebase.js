import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage"
// import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTaoKyzc8DD-b3P7bzZ0UdIG-7UQn6snw",
    authDomain: "disneyplus-clone-424ca.firebaseapp.com",
    projectId: "disneyplus-clone-424ca",
    storageBucket: "disneyplus-clone-424ca.appspot.com",
    messagingSenderId: "195183375000",
    appId: "1:195183375000:web:2f0420e35e0e3c5e9516ed",
    measurementId: "G-RFGRS3TVY8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  //provider will provide the google social login 
  const storage = firebase.storage();
  //for storing videos etc in the storage 

  
  export {auth , provider , storage};
  export default db;