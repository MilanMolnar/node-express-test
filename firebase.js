//requiring module
const { initializeApp, cert } = require('firebase-admin/app') 
const { getFirestore } = require('firebase-admin/firestore')

//https://youtu.be/LefcqnZHYeg?t=178

// saving cred.js in var for init
const serviceAccount = require('./cred.json')

//init firebase with service acc cred
initializeApp({
  credential: cert(serviceAccount)
})

//init firestore noSQL db
const db = getFirestore()

//dev config cred
const firebaseConfig = {
  apiKey: "AIzaSyCF3L6xUrEcoRHdrLW0ADKs36XnpmVBGy0",
  authDomain: "test-project-c297f.firebaseapp.com",
  projectId: "test-project-c297f",
  storageBucket: "test-project-c297f.appspot.com",
  messagingSenderId: "519071478102",
  appId: "1:519071478102:web:c7f03514b4e723dda5a6f7",
  measurementId: "G-B5W9FHHSMY"
};

//export firestore module
module.exports = {db}