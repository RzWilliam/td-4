const assert = require('assert');
const getRandomNumber = require('../index');

describe('getRandomNumber', () => {
  it('should return a random number between 0 and 100', () => {
    const randomNumber = getRandomNumber();
    assert.strictEqual(typeof randomNumber, 'number');
    assert.ok(randomNumber >= 0 && randomNumber <= 100);
  });
});