import firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJXoh14CBvQoHsWAeK4hSGsoPDHNtpLLo",
    authDomain: "ikea-clone-f1200.firebaseapp.com",
    projectId: "ikea-clone-f1200",
    storageBucket: "ikea-clone-f1200.appspot.com",
    messagingSenderId: "783674571932",
    appId: "1:783674571932:web:42e99b080805af0763c159"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };