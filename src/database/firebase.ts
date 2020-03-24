import * as firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config/firebase-config';

firebase.initializeApp(config);

let db = firebase.firestore();

export const getDoc = () => {
  db.collection('user').get().then((querySnapshot) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}, ${doc.data().age}, ${doc.data().memo}`);
      });
    }
  });
};

export const create = (collection: string, obj: any, cb: Function) => {
  db.collection(collection).add(obj).then((ref: firebase.firestore.DocumentReference) => {
    if (ref !== null) {
      cb(ref);
    }
  }).catch(() => {
    throw new Error('fail to create document...');
  });
};
