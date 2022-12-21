//Source:  https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/
var supertest = require("supertest");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:8000");

// UNIT test begin
describe('Test zadania 3', function () {
    it('Sprawdzenie pliku', function (done) {
        server
            .get('/submit?path=plik.txt')
            .expect('Content-Type', /text\/plain/)
            .expect(200, 'This is a file.\n\nFile content:\n\nAla ma kota\n', done);
    });

    it('Sprawdzenie katalogu', function (done) {
        server
            .get('/submit?path=test')
            .expect('Content-Type', /text\/plain/)
            .expect(200, 'This is a directory.', done);
    });

    it('Błędna ścieżka', function (done) {
        server
            .get('/submit?path=xxxx')
            .expect('Content-Type', /text\/plain/)
            .expect(404, 'The file does not exist.', done);
    });
});