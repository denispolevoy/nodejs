const fs = require('fs');
///////////////////////////////////
// Примеры на callbacks
// Записать в файл текст если файла нет он будет создан
fs.writeFile('./first.txt', 'First file text', err => {
  if (err) console.log(err);
  else {
    console.log('File first.txt was written');
    // Записать текст в уже существующий файл
    fs.appendFile('./first.txt', '\nOne more line', err => {
      if (err) console.log(err);
      else {
        console.log('Appended text to the first.txt file');
        // Переименовать файл
        fs.rename('./first.txt', './renamed-first.txt', err => {
          if (err) console.log(err);
          else console.log('File was renamed');
        });
      }
    });
  }
});
