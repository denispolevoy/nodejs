const fs = require('fs/promises');

// Пример записи на async/await

async function main() {
  try {
    await fs.writeFile('./first.txt', 'First file text');
    console.log('File first.txt was written');

    await fs.appendFile('./first.txt', '\nOne more line');
    console.log('Appended text to the first.txt file');

    await fs.rename('./first.txt', './renamed-first.txt');
    console.log('File was renamed');
  } catch (err) {
    console.log(err);
  }
}

main();
