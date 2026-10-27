//////////////////////
// // Async fs with callback function
// const fs = require('fs');

// fs.readFile('./renamed-first.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

/////////////////////
// // Promise fs
// const fs = require('fs/promises');
// fs.readFile('./05-fs/renamed-first.txt', 'utf-8')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

// console.log('Текущая директория:', process.cwd());
//////////////////////////////
// // Read file synchronously
// const fs = require('fs');
// try {
//   const data = fs.readFileSync('./05-fs/renamed-first.txt', 'utf-8');
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

////////////////////////////
// Запись  в файл - вариант с callback
// const fs = require('fs');
// const dataToWrite = 'Hello Node.js';

// fs.writeFile('./file.txt', dataToWrite, err => {
//   if (err) {
//     console.log(err);
//   }
// });
////////////////////////////
// Запись в файл - вариант с Promises
// const fs = require('fs/promises');

// const dataToWrite = 'Hello Node.js';

// fs.writeFile('./file.txt', dataToWrite)
//   .then(() => console.log('done'))
//   .catch(err => console.log(err));

////////////////////////////
// // Запись в файл - синхронный вариант
// const fs = require('fs');
// const dataToWrite = 'Hello Node.js';
// try {
//   fs.writeFileSync('./file.txt', dataToWrite);
//   console.log('done');
// } catch (error) {
//   console.log(error);
// }

////////////////////////////
// // Удаление файла вариант с callback
// const fs = require('fs');
// fs.unlink('./file.txt', error => {
//   if (error) {
//     console.log(error);
//   }
//   console.log('File deleted');
// });

////////////////////////////
// // Удаление файла вариант с Promise
// const fs = require('fs/promises');
// fs.unlink('./file.txt')
//   .then(() => console.log('File deleted'))
//   .catch(error => console.log(error));

////////////////////////////
// // Удаление файла синхронно
// const fs = require('fs/promises');
// try {
//   fs.unlink('./file.txt');
//   console.log('File deleted');
// } catch (error) {
//   console.log(error);
// }
