/**
 * Represents an operation
 */
class Operation {
    /**
     * @param {Number} x The first number
     * @param {Number} y The second number
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Sums up two numbers
     * @returns {Number} The result of the sum
     */
    sum() {
        return this.x + this.y;
    }
}

module.exports = Operation;