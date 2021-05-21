import firebase from 'firebase';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBi5cgl-nYIFd-a9DdDAvEz3W7Jni2GEn0',
  authDomain: 'guildhub-c38d3.firebaseapp.com',
  projectId: 'guildhub-c38d3',
  storageBucket: 'guildhub-c38d3.appspot.com',
  messagingSenderId: '989204388199',
  appId: '1:989204388199:web:1ea7bf6ac5b88abffb37c2',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage;

export { db, storage };
