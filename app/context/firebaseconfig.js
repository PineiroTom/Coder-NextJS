import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsPUT3O03xb4iJmpn1x8xUwO37REFKX7A",
  authDomain: "coder-nextjs-60e1a.firebaseapp.com",
  projectId: "coder-nextjs-60e1a",
  storageBucket: "coder-nextjs-60e1a.firebasestorage.app",
  messagingSenderId: "1079699828978",
  appId: "1:1079699828978:web:a3b583ea9cd6175927a06b"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);  
} else {
  app = getApps()[0]; 
}

const db = getFirestore(app);
export const auth = getAuth(app);

export default db;