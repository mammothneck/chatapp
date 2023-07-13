import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVsh6a0Szlkmj6iTCZYlBCpn8LPvqKtpU",
  authDomain: "chat-24875.firebaseapp.com",
  projectId: "chat-24875",
  storageBucket: "chat-24875.appspot.com",
  messagingSenderId: "368537588575",
  appId: "1:368537588575:web:68e72f6eed5bb842921cea",
  measurementId: "G-NTJ1JG0GFZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
