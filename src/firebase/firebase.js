import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWzcjdHl2zWbM5KcxCJQPg_7iJl4Ku1ZE",
  authDomain: "ecommerce-lions.firebaseapp.com",
  projectId: "ecommerce-lions",
  storageBucket: "ecommerce-lions.appspot.com",
  messagingSenderId: "191306642127",
  appId: "1:191306642127:web:d15eb9abc73c28fbd03dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);