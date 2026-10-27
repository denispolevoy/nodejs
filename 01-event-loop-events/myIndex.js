const { time, timeEnd } = require("console");
const fs = require("fs");
const dns = require("dns");

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log("Program start");

// Close events
fs.writeFile("./test.txt", "Hello Node.js", () => info("File written")); //8
// Promises
Promise.resolve().then(() => info("Promise 1")); //2
// Next tick
process.nextTick(() => info("Next tick 1")); //1
// setImmediate (Check)
setImmediate(() => info("Immediate 1")); //7
// Timeouts
setTimeout(() => info("Timeout 1"), 0); //3
setTimeout(() => {
  process.nextTick(() => info("Next tick 2")); //11
  info("Timeout 2"); //10
}, 100);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`); //9 // 12
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/O Events
dns.lookup("localhost", (err, address, family) => {
  info("DNS 1 localhost"); //4
  Promise.resolve().then(() => info("Promise 2")); //6
  process.nextTick(() => info("Next tick 3")); //5
});

console.log("Program end");
