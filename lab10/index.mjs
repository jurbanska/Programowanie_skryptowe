import { Operation } from './module.mjs';

const x = Number(process.argv[2]);
const y = Number(process.argv[3]);

const result = new Operation(x, y).sum();

console.log(`The result is ${result}.`);