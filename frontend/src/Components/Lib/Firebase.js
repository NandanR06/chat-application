// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f2519.firebaseapp.com",
  projectId: "reactchat-f2519",
  storageBucket: "reactchat-f2519.firebasestorage.app",
  messagingSenderId: "552814323032",
  appId: "1:552814323032:web:3f49de1396ea5f66c2b12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);