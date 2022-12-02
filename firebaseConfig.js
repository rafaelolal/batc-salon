// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDDRmVPKQl5stKINZX3JkV8Fakc4s3Ddk",
  authDomain: "webdesign-salon.firebaseapp.com",
  projectId: "webdesign-salon",
  storageBucket: "webdesign-salon.appspot.com",
  messagingSenderId: "990302414733",
  appId: "1:990302414733:web:b022f02a0fd21153f2ffc4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// Import the auth variable below to access the current user
// Example:
// import { auth } from "../firebaseConfig";
// auth.currentUser.email
export const auth = getAuth(app);