const path = require('path');
const fs = require('fs');

const filePath = '/home/denisp/node-js-projects/07-path/index.js';
const textFilePath = '/home/denisp/node-js-projects/07-path/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

// // Проверка истинности абсолютного пути
console.log(path.isAbsolute(filePath)); // true
console.log(fs.existsSync(textFilePath)); // false
console.log(fs.existsSync(filePath)); // false
console.log(path.isAbsolute(relativePath)); // false

// // Получить последнюю часть пути
console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

// // Возвращает путь директории без названия файла
console.log(path.dirname(filePath)); // /home/denisp/node-js-projects/07-path
console.log(path.dirname(directoryPath)); // ./node

// // Получить абсолютный путь
console.log(path.resolve(relativePath)); // /home/denisp/node-js-projects/07-path/node/movie.mov

////////////////////////////////////
// // Получить расширение файла в указанном пути
console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directoryPath)); //

// // Распарсить на части определенный путь
console.log(path.parse(filePath));
// {
//     root: '/',
//     dir: '/home/denisp/node-js-projects/07-path',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

const parsedPath = path.parse(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// /home/denisp/node-js-projects/07-path/renamed-index.mjs
