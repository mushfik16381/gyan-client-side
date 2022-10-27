// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFB_us__z09fEH0oQd73IU4Y6F3xdFu-k",
  authDomain: "gyan-client-site.firebaseapp.com",
  projectId: "gyan-client-site",
  storageBucket: "gyan-client-site.appspot.com",
  messagingSenderId: "162440201810",
  appId: "1:162440201810:web:c7f79d470e062cf09fc18b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;