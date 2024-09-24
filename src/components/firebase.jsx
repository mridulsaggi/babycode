// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHBTYe6oXqXUFvL8kmlQtYymlwSEi_IVs",
    authDomain: "sample-baefa.firebaseapp.com",
    projectId: "sample-baefa",
    storageBucket: "sample-baefa.appspot.com",
    messagingSenderId: "1000488938214",
    appId: "1:1000488938214:web:a6780abcf29de6298c6927"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
