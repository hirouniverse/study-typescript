import * as firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config/firebase-config';

firebase.initializeApp(config);

let db = firebase.firestore();

export function create<T>(collectionName: string, obj: T, cb: Function): void {
  db.collection(collectionName).add(obj).then((ref: firebase.firestore.DocumentReference) => {
    if (ref !== null) {
      cb(ref);
    }
  }).catch(() => {
    throw new Error('fail to create document...');
  });
}

export function getAll(collection: string, cb: Function): void {
  db.collection(collection).get().then((querySnapshot) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        cb(doc);
      });
    }
  });
}

export function getById(collection: string, value: string): void {
  db.collection(collection).where('id', '==', value).get();
}