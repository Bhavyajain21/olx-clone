import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBVd3Dm0ARzSwA13KysT_v_HK_HFm6T8U0",
  authDomain: "olx-clone-87401.firebaseapp.com",
  projectId: "olx-clone-87401",
  storageBucket: "olx-clone-87401.appspot.com",
  messagingSenderId: "354692968474",
  appId: "1:354692968474:web:63c0b19a3e26551ac461a3",
  measurementId: "G-5FY7TT2YTB",
};

export const Firebase = firebase.initializeApp(firebaseConfig); //named export
