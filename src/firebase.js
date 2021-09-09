import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAKhxfgUTQnQhNw-qYAK9teidpmsXTEMKw",
  authDomain: "snapchat-clone-1b0ba.firebaseapp.com",
  projectId: "snapchat-clone-1b0ba",
  storageBucket: "snapchat-clone-1b0ba.appspot.com",
  messagingSenderId: "917039555941",
  appId: "1:917039555941:web:299014a97a871952e32d8c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };