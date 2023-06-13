import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXGihQFmmb3GhzT4Vph_82DTPWHowdw4U",
  authDomain: "blog-1602a.firebaseapp.com",
  projectId: "blog-1602a",
  storageBucket: "blog-1602a.appspot.com",
  messagingSenderId: "715744406947",
  appId: "1:715744406947:web:e64f90a9c454b6f165be16"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }