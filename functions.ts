function add(n1: number, n2: number) {
  return n1+ n2;
}

function printResult(result: number): void {
  console.log(result);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// function printResultUndefined(result: number): undefined {
//   console.log(result);
//   return;
// }

printResult(add(10, 7));

// undefined is also type
// const result: undefined

// Function type
// let combineValues: Function;

// no parameter and returns number
// let combineValues: () => number;

// 2 number parameter and returns number
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // undefined
// combineValues = 5;

console.log(combineValues(8, 9));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
