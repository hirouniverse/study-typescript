import { addDoc, getDoc } from './database/firebase';
import { User } from './models/user';

let name = (<HTMLInputElement>document.getElementById('name')!);
let age = (<HTMLInputElement>document.getElementById('age')!);
let memo = (<HTMLInputElement>document.getElementById('memo')!);

let message = document.getElementById('message')!;

document.getElementById('item-add')?.addEventListener('click', () => {

  let user = new User(name.value, +age.value, memo.value);
  addDoc(user);

  name.value = '';
  age.value = '';
  memo.value = '';

  message.hidden = false;

  setTimeout(() => {
    message.hidden = true;
  }, 1500);
});

document.getElementById('item-get')?.addEventListener('click', () => {
  getDoc();
});