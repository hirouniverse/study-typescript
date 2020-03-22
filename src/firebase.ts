import * as firebase from 'firebase/app';
import 'firebase/firestore';
import config from './config/firebase-config';
import { User } from './user';

firebase.initializeApp(config);

let db = firebase.firestore();

export const addDoc = (doc: User) => {
  db.collection('user').add({
    name: doc.name,
    age: doc.age,
  })
  .then((docRef) => {
    console.log("Document ID: " + docRef.id);
  })
  .catch((err) => {
    console.log(err);
  });
};

export const getDoc = () => {
  db.collection('user').get().then((querySnapshot) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`);
      });
    }
  });
};