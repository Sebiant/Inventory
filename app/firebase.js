

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"

const firebaseConfig = {
  // Paste your firebase config here
  apiKey: "AIzaSyCEUhNiiVpiabRolchMe_r1YziNmAbNVtY",
  authDomain: "ss-inventarios.firebaseapp.com",
  projectId: "ss-inventarios",
  storageBucket: "ss-inventarios.appspot.com",
  messagingSenderId: "753029944568",
  appId: "1:753029944568:web:e018e09b06ca4e11aa570d",
  measurementId: "G-7CQ4YX3X43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
