import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDN6MaYC-cbhoN1FgPh-927jbtguOOQVIQ",
  authDomain: "project-manager-883eb.firebaseapp.com",
  projectId: "project-manager-883eb",
  storageBucket: "project-manager-883eb.appspot.com",
  messagingSenderId: "551528569556",
  appId: "1:551528569556:web:3c2494fc64db5298c47941",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
