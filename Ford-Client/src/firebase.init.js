import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB8LLNQopd64wwdeMAzGsfVvK77xTDFzlo",
  authDomain: "ford-client.firebaseapp.com",
  projectId: "ford-client",
  storageBucket: "ford-client.appspot.com",
  messagingSenderId: "353442320670",
  appId: "1:353442320670:web:3055bc879fcfb8b10af90f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
