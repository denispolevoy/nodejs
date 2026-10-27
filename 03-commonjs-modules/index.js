const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import');
// // DONT'T USE ABSOLUTE PATHS
// const greetingFn = require('/home/denisp/node-js-projects/03-commonjs-modules/my-modules/single-export.js');
const greetingFn = require('./my-modules/single-export');

// Imports from multiple-exports
// console.log(myName);
// console.log(myHobbies);
// console.log(myFavoriteNumber);

// mutates array in the multiple-exports module!
myHobbies.push('climbing');

// Import from singlr-export
console.log(myHobbies);
// console.log(greetingFn);
// greetingFn(myName);

// Imports from export-and-import
// console.log(myOtherName);
// console.log(myFriendsName);
console.log(myGreatHobbies);
