import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDzGXZsjocP8BeSMnWBdksd0Po7gdR6T8",
    authDomain: "notion-clone-13f68.firebaseapp.com",
    projectId: "notion-clone-13f68",
    storageBucket: "notion-clone-13f68.firebasestorage.app",
    messagingSenderId: "768887010298",
    appId: "1:768887010298:web:e80ea934317165734a6a43"
  };


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };