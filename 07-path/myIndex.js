const path = require('path');

// // Соединение сигментов пути
const linuxP = path.join('/usr', 'node', 'app.js');
console.log(linuxP); // /usr/node/index.js

const winP = path.join('D:\\', 'node', 'app.js');
console.log(winP); // /D:\node\index.js

// Сформировать абсолютный путь к файлу
// Расчет абсолютного пути на основании частей пути
const path = require('path');
const result = path.resolve('node', 'index.js');
console.log(result); // /home/denisp/node-js-projects/07-path/node/index.js
