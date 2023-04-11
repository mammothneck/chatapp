import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-UVT_9U-ipoBth2jWOEVyAvFuFoX6naI",
  authDomain: "chat-ca311.firebaseapp.com",
  databaseURL: "https://chat-ca311-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-ca311",
  storageBucket: "chat-ca311.appspot.com",
  messagingSenderId: "452457944097",
  appId: "1:452457944097:web:76f8308e7e4e83fbf1bf60",
  measurementId: "G-720LK2ENVV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
