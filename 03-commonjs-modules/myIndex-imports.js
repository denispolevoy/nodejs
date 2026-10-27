// // Import all module
// const myModule = require('./index-exports');
// console.log(myModule);
// myModule.show();

// // Import one function
// const myFn = require('./index-exports');
// console.log(myFn);
// myFn();

// // Import instead module object single Array
// const myUsers = require('./index-exports');
// console.log(myUsers);

////////////////////////////////////
// Импорт нескольких переменных
// const myConstant = require('./index-exports');
// console.log(myConstant);
// // Destructured module object
// const { URL, USERNAME, PASSWORD } = require('./index-exports');
// console.log(URL);
// console.log(USERNAME);
// console.log(PASSWORD);

/////////////////////////////
// // Import export function
const getData = require('./index-exports');

getData('https://jsonplaceholder.typicode.com/posts')
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
