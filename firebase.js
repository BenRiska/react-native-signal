import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDM23LZrVtG5xFS0Wbbtiu-qTuDNYNc3Cs",
    authDomain: "react-native-c87dd.firebaseapp.com",
    projectId: "react-native-c87dd",
    storageBucket: "react-native-c87dd.appspot.com",
    messagingSenderId: "989345905653",
    appId: "1:989345905653:web:c22446212d0fa8358d3ebc"
  };

  let app;
 

  if (firebase?.apps?.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase?.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth} 
