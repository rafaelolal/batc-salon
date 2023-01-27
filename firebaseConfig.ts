import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDDRmVPKQl5stKINZX3JkV8Fakc4s3Ddk",
  authDomain: "webdesign-salon.firebaseapp.com",
  projectId: "webdesign-salon",
  storageBucket: "webdesign-salon.appspot.com",
  messagingSenderId: "990302414733",
  appId: "1:990302414733:web:b022f02a0fd21153f2ffc4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// Import the auth variable below to access the current user
// Example:
// import { auth } from "../firebaseConfig";
// auth.currentUser.email
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
// Import the db variable below to access the database
// Example:
// import { db } from "../firebaseConfig";
export const db = getFirestore(app);
// Initialize Storage and get a reference to the service
// Import the storage variable below to access Cloud Storage
// Example:
// import { storage } from "../firebaseConfig";
export const storage = getStorage(app);
