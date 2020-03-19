function add(num1: number, num2: number, showResult: boolean, phrase: string) {

  // if (typeof num1 !== 'number' || typeof num2 !== 'number') {
  //   throw Error('Incorrect input!');
  // }

  const result = num1 + num2;
  if (showResult) {
    alert(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResultFlag = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResultFlag, resultPhrase);