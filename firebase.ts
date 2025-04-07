import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "notion-clone-13f68.firebaseapp.com",
    projectId: "notion-clone-13f68",
    storageBucket: "notion-clone-13f68.firebasestorage.app",
    messagingSenderId: "768887010298",
    appId: process.env.FIREBASE_APP_ID
  };


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };