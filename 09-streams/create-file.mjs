import fs from 'fs';

import path from 'path';
// Program arguments

// How to run program: node createfile.mjs <filename> <linesQty>
if (!process.argv[2] || !process.argv[3]) {
  console.log('Filename and lines qty must be suplied as arguments');
  process.exit(0);
}
console.log('Continue...');

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);

if (isNaN(linesQty)) {
  console.log('Lines qty must be a number');
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files/', fileName));

console.log('Start', performance.now());
for (let i = 0; i < linesQty; i++) {
  writeStream.write(
    `This is a line number ${i + 1} in the automatically generated file\n`,
  );
}

console.log('End', performance.now());

setTimeout(() => console.log('Timeout', performance.now()));

writeStream.end(() => {
  console.log(
    `Automatically generated file ${fileName} with ${linesQty} lines was created!`,
  );
});
