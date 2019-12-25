const expect = require('chai').expect;
const { isBoolean } = require('../index');

describe('#isBoolean', function() {
  it('correct', function() {
    // arrange
    let val = true;
    // act
    let result = isBoolean(val);
    // assert
    expect(result).to.be.equal(true);
  });
});
