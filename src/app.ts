import { addDoc, getDoc } from './firebase';
import { User } from './user';

let user: User = new User('UserName', 29);
addDoc(user);
getDoc();
