const { initializeApp, cert } = require('firebase-admin/app') 
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./cred.json')

initializeApp({
  credential: cert(serviceAccount)
})

const db = getFirestore()

const firebaseConfig = {
  apiKey: "AIzaSyCF3L6xUrEcoRHdrLW0ADKs36XnpmVBGy0",
  authDomain: "test-project-c297f.firebaseapp.com",
  projectId: "test-project-c297f",
  storageBucket: "test-project-c297f.appspot.com",
  messagingSenderId: "519071478102",
  appId: "1:519071478102:web:c7f03514b4e723dda5a6f7",
  measurementId: "G-B5W9FHHSMY"
};

module.exports = {db}