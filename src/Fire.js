// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6CpiEkWqC4XrOpHDZP1v1mAhgSdF0QmI",
  authDomain: "masalacafe-abc99.firebaseapp.com",
  databaseURL: "https://masalacafe-abc99.firebaseio.com",
  projectId: "masalacafe-abc99",
  storageBucket: "masalacafe-abc99.appspot.com",
  messagingSenderId: "491528676395",
  appId: "1:491528676395:web:367c054d7877bcd005f66e",
  measurementId: "G-W2E4G2QGT9"
};

const fire =firebase.initializeApp(firebaseConfig);

export default fire;