const calcRomanNumbers = require('../src/calcRomanNumbers');

describe('calcRomanNumbers', () => {
  it('should be return One', () => {
    const number = calcRomanNumbers('i');

    expect(number).toEqual(1);
  });

  it('should be return Three', () => {
    const number = calcRomanNumbers('iIi');

    expect(number).toEqual(3);
  });

  it('should be return one thousand nine hundred forty-four', () => {
    const number = calcRomanNumbers('MCMXLIV');

    expect(number).toEqual(1944);
  });

  it('should be return error in roman number', () => {
    const number = calcRomanNumbers('MCMPXLIV');

    expect(number).toEqual('Nem ideia do que isto significa!');
  });
})