import { create } from '../database/firebase';

export class User {
  constructor(private _name: string, private _age: number, private _memo: string) {}

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get memo() {
    return this._memo;
  }

  generate() {
    return {
      name: this._name,
      age: this._age,
      memo: this._memo,
    };
  }

  register(user: User) {
    create<User>('user', user, function(result: firebase.firestore.DocumentReference) {
      console.log(result.id);
    });
  }
}
