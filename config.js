import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBBvJZt8rYUBAn9SRizzdoAGY-LDdhjnTw",
  authDomain: "bedtimestories-574a2.firebaseapp.com",
  projectId: "bedtimestories-574a2",
  storageBucket: "bedtimestories-574a2.appspot.com",
  messagingSenderId: "135570323115",
  appId: "1:135570323115:web:b72b62622bc34b8344e9ee"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore(); 