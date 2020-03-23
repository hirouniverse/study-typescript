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
}
