const assert = require('assert');
const fs = require('fs');

describe('fsTest', () => {
  it('Sprawdza czy plik o podanej ścieżce istnieje', () => {
    const path = '/home/jurbanska/WebstormProjects/Programowanie_skryptowe/lab10/plik.txt';
    const expected = true;
    const actual = fs.existsSync(path);
    assert.equal(actual, expected);
  });

  it('Sprawdza czy podany plik jest plikiem', () => {
    const path = '/home/jurbanska/WebstormProjects/Programowanie_skryptowe/lab10/plik.txt';
    const expected = true;
    const stat = fs.statSync(path);
    const actual = stat.isFile();
    assert.equal(actual, expected);
  });

  it('Sprawdza czy podany plik jest katalogiem', () => {
    const path = '/home/jurbanska/WebstormProjects/Programowanie_skryptowe/lab10';
    const expected = true;
    const stat = fs.statSync(path);
    const actual = stat.isDirectory();
    assert.equal(actual, expected);
  });
});
