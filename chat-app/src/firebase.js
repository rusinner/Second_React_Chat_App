import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBJgTfnt6P5hWoyJl4kxuJfn9vezjnQEyE",
    authDomain: "totalchat-d48eb.firebaseapp.com",
    projectId: "totalchat-d48eb",
    storageBucket: "totalchat-d48eb.appspot.com",
    messagingSenderId: "660691979084",
    appId: "1:660691979084:web:6a581e2b2982483f359de9",
  })
  .auth();
