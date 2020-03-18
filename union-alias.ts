// Custom Type
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


enum Type {
  NUMBER,
  STRING
};

// union types
// resultType is Enum version
function combine(input1: Combinable, input2: number | string, resultType: Type) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === Type.NUMBER) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultType === Type.NUMBER) {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

// union type
// resultType is literal type
function combine2(
  input1: number | string,
  input2: number | string,
  resultType: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultType === Type.NUMBER) {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(20, 30, Type.NUMBER);
console.log(combineAges);

const combineStringAges = combine('30','26', Type.NUMBER);
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', Type.STRING);
console.log(combineNames);