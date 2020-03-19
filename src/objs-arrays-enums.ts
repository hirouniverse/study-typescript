// const person: {
//   name: string;
//   age: number;
//   hobbies: Array
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[], // Array
//   role: [number, string]; // Tuple
// } = {
//   name: 'Maximilian', // string
//   age: 30, // number
//   hobbies: ['Sports', 'Cooking'], // Array
//   role: [2, 'author'], // tuple
// };

// define some role code
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian', // string
  age: 30, // number
  hobbies: ['Sports', 'Cooking'], // Array
  role: Role.ADMIN,
};


// person.role.push('admin');
// person.role[1] = 10;
// console.log(person.role);

let favoriteActivities: string[];
// favoriteActivities = '';       Error!
// favoriteActivities = ['', 1];  Error! 
favoriteActivities = ['Sports', 'Tennis'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); Error! map is not exist in string.
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}
