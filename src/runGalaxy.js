const calcRomanNumbers = require('./calcRomanNumbers');

module.exports = function start(lines){
  const romanValues = [];
  const itensValues = [];
  const unknownValue= 'Nem ideia do que isto significa!\n';
  let returnValue = '';

  lines.forEach(line => {
    if(line.includes('representa')){
      let splitLine = line.split(' ');

      if(splitLine.length < 3){
        returnValue += unknownValue;
        return;
      }
      romanValues[splitLine[0]] = splitLine[2].toUpperCase();
    }else if(line.includes('valem')) {
      let splitValue = line.split(' valem ');
      let splitSpace = splitValue[0].split(' ');
      let item = splitSpace[splitSpace.length - 1];
      let valueTotal = splitValue[1].split(' ')[0];

      let sumRomanValue = '';

      for(let i = 0; i < splitSpace.length - 1; i++) {
        sumRomanValue += romanValues[splitSpace[i]];
      }

      const valueRoman = calcRomanNumbers(sumRomanValue);
      if(typeof valueRoman === "string"){
        returnValue += valueRoman;
        return;
      }
      const valueUnit = valueTotal / valueRoman;
      itensValues[item] = valueUnit;

    }else if(line.includes('quanto vale')){
      let splitValue = line.split('quanto vale ');
      let splitSpace = splitValue[1].split(' ');
      
      let sumRomanValue = '';
      let valueGalaxy = '';

      for(let i = 0; i < splitSpace.length - 1; i++) {
        sumRomanValue += romanValues[splitSpace[i]];
        valueGalaxy += splitSpace[i] + ' ';
      }

      const valueRoman = calcRomanNumbers(sumRomanValue);
      if(typeof valueRoman === "string"){
        returnValue += valueRoman;
        return;
      }
      returnValue += `${valueGalaxy}vale ${valueRoman}\n`;
      
    }else if(line.includes('quantos créditos são')){
      let splitValue = line.split('quantos créditos são ');
      let splitSpace = splitValue[1].split(' ');

      let sumRomanValue = '';
      let valueGalaxy = ''

      for(let i = 0; i < splitSpace.length - 2; i++) {
        sumRomanValue += romanValues[splitSpace[i]];
        valueGalaxy += splitSpace[i] + ' ';
      }
      const valueRoman = calcRomanNumbers(sumRomanValue);
      if(typeof valueRoman === "string"){
        returnValue += valueRoman;
        return;
      }

      const value = itensValues[splitSpace[splitSpace.length - 2]] * valueRoman;
      returnValue +=`${valueGalaxy}${splitSpace[splitSpace.length - 2]} custa ${value} créditos\n`;
    }
  })
  
  return {returnValue, romanValues, itensValues};
}
