var expect = chai.expect;

describe('The sum() function', function() {
    it('Test cyfry()', function () {
        chai.assert.equal(cyfry('111'), 3);
        chai.assert.equal(cyfry('11aa'), 2);
        chai.assert.equal(cyfry('b3345a'), 15);
        chai.assert.equal(cyfry(''), 0);
    });

    it('Test litery()', function () {
        chai.assert.equal(litery('111'), 0);
        chai.assert.equal(litery('11aa'), 2);
        chai.assert.equal(litery('b3345a'), 2);
        chai.assert.equal(litery(''), 0);
    });

    it('Test suma()', function () {
        chai.assert.equal(suma('111'), 111);
        chai.assert.equal(suma('11aa'), 122);
        chai.assert.equal(suma('b3345a'), 122);
        chai.assert.equal(suma(''), 122);
    });
});