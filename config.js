// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF3L6xUrEcoRHdrLW0ADKs36XnpmVBGy0",
  authDomain: "test-project-c297f.firebaseapp.com",
  projectId: "test-project-c297f",
  storageBucket: "test-project-c297f.appspot.com",
  messagingSenderId: "519071478102",
  appId: "1:519071478102:web:c7f03514b4e723dda5a6f7",
  measurementId: "G-B5W9FHHSMY"
};

// Initialize Firebase https://www.youtube.com/watch?v=LefcqnZHYeg
const firebase = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);