// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWV36p8hQAhc_AQNKVGPYH6jEvnS11pyc",
  authDomain: "gyan-client-side.firebaseapp.com",
  projectId: "gyan-client-side",
  storageBucket: "gyan-client-side.appspot.com",
  messagingSenderId: "700747021074",
  appId: "1:700747021074:web:332949ff242b619e6091cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;