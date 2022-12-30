#!/usr/bin/env node

const fs = require('fs');

const sciezka = process.argv[2];

if (fs.existsSync(sciezka)) {
  const stat = fs.statSync(sciezka);
  if (stat.isFile()) {
    console.log(`'${sciezka}' jest plikiem, a jego zawartością jest: ${fs.readFileSync(sciezka, 'utf8')}`);
  } else if (stat.isDirectory()) {
    console.log(`'${sciezka}' jest katalogiem`);
  }
} else {
  console.log(`'${sciezka}' nie istnieje`);
}
