const start = require('../src/runGalaxy');
const readFile = require('../src/readFile');

describe('Galaxy', () => {
  it('should be able to return error unknown value', () => {
    const line = ['ssdo representa C', 'ssd representa'];
    const returnValue = start(line).returnValue;
    
    expect(returnValue).toContain('Nem ideia do que isto significa');
  });

  it('shoud be able to return values roman numbers', () => {
    const file = new readFile(__dirname  +  '/test.txt' );
    const text = file.content();

    const roman = start(text).romanValues;

    const romanValue = [];
  
    romanValue['snob'] = 'I';
    romanValue['krok'] = 'V';
    romanValue['squid'] = 'X';
    romanValue['leij'] = 'L';

    expect(roman).toEqual(romanValue);
  });


  it('shoud be able to test unit value of metals', () => {
    const file = new readFile(__dirname  + '/test.txt' );
    const text = file.content();

    const itensValues = start(text).itensValues;
    const itensValueTest = [];
  
    itensValueTest['Silver'] = 17;
    itensValueTest['Gold'] = 14450;
    itensValueTest['Iron'] = 195.5;
    
    expect(itensValues).toEqual(itensValueTest);
  });

  it('shoud be able to test unit value error of metals', () => {
    const itensValues = start(['squid representa Z', 'squid Silver valem 34 créditos']).returnValue;
    
    expect(itensValues).toEqual("Nem ideia do que isto significa!");
  });

  it('should be able to return value of metal', () => {
    const file = new readFile(__dirname  + '/test.txt' );
    const text = file.content();


    expect(start(text).returnValue).toContain('snob krok Gold custa 57800 créditos')
  });

  it('should be able to return unknown values', () => {
    const itensValues = start(['quantos créditos são snob krok Silver ?']).returnValue;
    
    expect(itensValues).toEqual("Nem ideia do que isto significa!");
  })
})