// // Export object
// module.exports.show = function printHello() {
//   console.log('Hello world');
// };

// // Export default
// module.exports = function() {
//   console.log('Hello world');
// };

// // Export single Array instead of whole module
// const users = ['Denis', 'Artyom', 'Daria'];
// module.exports = users;

//////////////////////////////////////
// // Экспорт нескольких переменных
// const URL = 'http://localhost:5000';
// const USERNAME = 'admin';
// const PASSWORD = 'strong_pass';

// module.exports.URL = URL;
// module.exports.USERNAME = USERNAME;
// module.exports.PASSWORD = PASSWORD;

// // More comfortable
// exports.URL = URL;
// exports.USERNAME = USERNAME;
// exports.PASSWORD = PASSWORD;

///////////////////////////////

// // Example export function
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

module.exports = getData;