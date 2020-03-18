/***
 * difference between unknown and any

  let userInput: any;
  let userName: string;

  userInput = 5;
  userInput = 'Max';

  userName = unserInput; // no error
 */


// unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

// never type
// which is NEVER returns
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occured', 500);
