const EventEmitter = require('events');

///////////////////////////////////////
const myEmitter = new EventEmitter();
myEmitter.on('customEvent', () => {
  console.log('CustomEvent was emitted');
});
myEmitter.emit('customEvent');

//////////////////////////////////////
// // Передача аргументов в колбэк функции слушателя

myEmitter.on('newUser', userName => {
  console.log('Hello' + ' ' + userName);
});

myEmitter.emit('newUser', 'Denis');
