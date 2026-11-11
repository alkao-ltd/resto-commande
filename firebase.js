import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyWHypLSaTQyBRHKDxdlWRI8P-fJ8nyA0",
  authDomain: "resto-commande-c0bac.firebaseapp.com",
  projectId: "resto-commande-c0bac",
  storageBucket: "resto-commande-c0bac.firebasestorage.app",
  messagingSenderId: "92845987895",
  appId: "1:92845987895:web:6a6edb5341722f3b5b87b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
