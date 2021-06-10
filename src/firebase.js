import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA06CYJq6HL5BRyE3MZnPfNhccWuuwvyos",
    authDomain: "instagram-be.firebaseapp.com",
    projectId: "instagram-be",
    storageBucket: "instagram-be.appspot.com",
    messagingSenderId: "444141879894",
    appId: "1:444141879894:web:fdeebec3e6aceffc2171f7"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
  
  export { db, auth, storage };