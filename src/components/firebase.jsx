import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AD,
  projectId: import.meta.env.VITE_PID,
  storageBucket: import.meta.env.VITE_SB,
  messagingSenderId: import.meta.env.VITE_MS,
  appId: import.meta.env.VITE_AID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth};