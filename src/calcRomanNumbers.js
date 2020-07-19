const isValidRoman = new RegExp(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$|^\d+$/)

module.exports = function calcRomanNumbers (romanNumber){
  let sum = 0;
  let romanNumberUpper = romanNumber.toUpperCase();

  if(!isValidRoman.test(romanNumberUpper)){
    return 'Nem ideia do que isto significa!';
  }

  const romanValues = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
    IV:4,
    IX:9,
    XL:40,
    XC:90,
    CD:400, 
    CM:900,
  }

  for(let i = 0; i < romanNumberUpper.length; i++){
    let dr = romanNumberUpper.charAt(i);
    let drNext = romanNumberUpper.charAt(i + 1);

    if(romanValues[dr + drNext]){
      sum += romanValues[dr + drNext];
      i++;
    }else{
      sum += romanValues[dr];
    }
  }
  return sum;
}