const module = require('./module');

const x = Number(process.argv[2]);
const y = Number(process.argv[3]);

const result = new module(x, y).sum();

console.log(`The result is ${result}.`);