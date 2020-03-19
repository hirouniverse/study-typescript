import { PointModule } from "./point";

// basic types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: string[] = ['a', 'b', 'c'];
let g: boolean[] = [true, false];
let h: any[] = [1, 'a', true];
let i: Function;
let j: (a: number) => void; // Function
let k: number | string; // union
let l: {
  name: string;
  age: number;
}; // object
let m: 'as-number' | 'as-string'; // literal type
type Sample = number | string; // Custom Type
let n: Sample;
let o: unknown; // cannot assign type which is not assigned at the first

// Constant Value
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// ====> enum
enum Color { RED = 0, GREEN, BLUE }; // starts from 0
let backgroundColor = Color.RED;

// type assertion
let message; // any
message = 'hello';
let endWithO = (<string>message).endsWith('o');
let alternativeWay = (message as string).endsWith('o');


// declare function returns number
function calcNumber(n1: number, n2: number): number {
  return n1 + n2;
}

// declare function which doesn7t return
function withoutReturn(): void {
  console.log('void function');
}

// declare function never return
function showMessage(type: string): never {
  if (type === 'error') {
    // error crashes
    throw { message: 'error', code: 500 };
  } else {
    // endless loop
    while (true) {
      console.log('endless...');
    }
  }
}

// arrow function
let doLog = (message: string) => console.log(message);

// object parameter
let drawPoint = (point: {x: number, y: number}) => {
  // ...
}

drawPoint({
  x: 2,
  y:6
});

// interface
interface Point {
  x: number,
  y: number
}
let drawWithInterface = (point: Point) => {
  // ...
}

// classes
class PointClass {
  // access modifiers can be used
  // public
  // private
  // protected
  // no need to declare implicitly
  // private x: number;
  // private y: number;

  // different with other languages' constructor
  // typescript can only have one costructor
  // but can use optional type
  constructor(private _x?: number, private _y?: number) {
    // no need to assign implicitly
    // this.x = x;
    // this.y = y;
  }

  // getX() {
  //   return this.x;
  // }

  // getter property
  get x(): number {
    return this.x;
  }

  // setX(value) {
  //   if (value < 0)
  //     throw new Error('value cannot be less than 0');
  //   this.x = value;
  // }

  // setter property
  set x(value) {
      if (value < 0)
        throw new Error('value cannot be less than 0');
      this.x = value;
  }

  // method
  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
    // ...
  }

  // method
  getDistance(another: PointClass) {
    // ...
  }
}
let point1: PointClass;
let point2: PointClass;
point1 = new PointClass(1, 2);
// let x = point1.getX(); // getX() case
let x = point1.x;
// point1.setX(5); // setX(value) case
point1.x = 5;
point2 = new PointClass(); // no error since parameter is optional
point1.draw();

let point3: PointModule;