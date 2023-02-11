// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_xQBhxTf3832fK1KW2QQiL9e9mu00YM",
  authDomain: "twitter-43dd8.firebaseapp.com",
  projectId: "twitter-43dd8",
  storageBucket: "twitter-43dd8.appspot.com",
  messagingSenderId: "925855485134",
  appId: "1:925855485134:web:2d83405f3b893fae47949f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
