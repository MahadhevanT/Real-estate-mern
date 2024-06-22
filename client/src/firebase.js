// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE,
  authDomain: "real-estate-ff514.firebaseapp.com",
  projectId: "real-estate-ff514",
  storageBucket: "real-estate-ff514.appspot.com",
  messagingSenderId: "133530318320",
  appId: "1:133530318320:web:33828557faad4dd90ed935"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);