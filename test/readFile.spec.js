const readFile = require('../src/readFile');

describe('readFile', () => {
  it('should be able to return the first value of the array', () => {
    const file = new readFile(__dirname  + '/test.txt' );
    const text = file.content();

    expect(text).toContain('snob representa I');
  });
})