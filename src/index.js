const readFile = require('./readFile');
const start = require('./runGalaxy');

const file = new readFile(__dirname  + '/textGalaxy.txt' );
console.log(start(file.content()).returnValue);