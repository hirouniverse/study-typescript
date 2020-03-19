const button = document.querySelector('button')!; // [!] ensure that button object is exists

// error: noImplicitReturns
// function addNums(n1: number, n2: number) {
//   if (n1 + n2 > 0) {
//     return n1 + n2;
//   }
// }

function clickHandler(message: string) {
  // let userName = 'Max'; // error no used local variable
  console.log(message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Welcome!'));
}
