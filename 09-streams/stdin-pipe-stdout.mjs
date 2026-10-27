import fs from 'fs';
// import stream from 'stream';
// import { Transform } from 'stream';

// const upperCaseStream = new Transform({
//   transform: function (chunk, encoding, cb) {
//     const upperCased = chunk.toString().toUpperCase();
//     cb(null, upperCased);
//   },
// });

// const reverseStream = new Transform({
//   transform: function (chunk, encoding, cb) {
//     const arrayOfChars = chunk.toString().split('');
//     const lastChar = arrayOfChars.pop();
//     const reversed = arrayOfChars.reverse().concat(lastChar).join('');
//     cb(null, reversed);
//   },
// });

// process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// const filePath = './files/stdin-dump.txt';

// // Pipe to file
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdin.pipe(process.stdout);

// // Read data from file by stream
// const readStream = fs.createReadStream(filePath);

// // Pipe to stdout
// readStream.pipe(process.stdout);
