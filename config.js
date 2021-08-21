import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHO7oCxCdIevqsX3aq3n9CsTWzzplZDRU",
    authDomain: "wire-less-libray.firebaseapp.com",
    projectId: "wire-less-libray",
    storageBucket: "wire-less-libray.appspot.com",
    messagingSenderId: "396319467426",
    appId: "1:396319467426:web:1e0aa861749f0dabb334fb"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
    export default firebase.database();