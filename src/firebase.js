import firebase from 'firebase/app';
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCXbG_oZLyCAP0TdyM6dcVLXkMXGtSifR4",
    authDomain: "unichat-153d2.firebaseapp.com",
    projectId: "unichat-153d2",
    storageBucket: "unichat-153d2.appspot.com",
    messagingSenderId: "18978786935",
    appId: "1:18978786935:web:346526ab9bcd7bc3a24072",
    measurementId: "G-WZ1WHNH6LW"
  }).auth();