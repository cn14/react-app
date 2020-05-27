import React from 'react';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDzHW3Kxlc6qVN6oi7TTnwnycG1-PHfs8E",
    authDomain: "webapp-16854.firebaseapp.com",
    databaseURL: "https://webapp-16854.firebaseio.com",
    projectId: "webapp-16854",
    storageBucket: "webapp-16854.appspot.com",
    messagingSenderId: "120104162782",
    appId: "1:120104162782:web:fe359312992cc4d0dd794f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;