import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDAApb2AI0JoWwzyHIEv1gONSU4kgddIT8",
    authDomain: "hostel-becec.firebaseapp.com",
    projectId: "hostel-becec",
    storageBucket: "hostel-becec.appspot.com",
    messagingSenderId: "1065972786299",
    appId: "1:1065972786299:web:a82ca420350d3e5e7aaede",
    measurementId: "G-DFB0TTFG64"
  };
  
firebase.initializeApp(firebaseConfig);
  
export default firebase;