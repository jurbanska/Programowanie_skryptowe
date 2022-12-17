#!/usr/bin/env node

const fs = require('fs');
const path = process.argv[2];


if (fs.existsSync(path)) {
    const stat = fs.statSync(path);
    if (stat.isFile()) {
        console.log(`'${path}' jest plikiem, a jego zawartością jest: ${fs.readFileSync(path, 'utf8')}`);
    } else if (stat.isDirectory()) {
        console.log(`'${path}' jest katalogiem`);
    }
} else {
    console.log(`'${path}' nie istnieje`);
}