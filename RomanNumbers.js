const romanToDecimal = (romanNumber) => {
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
  let sum = 0;
  let romanNumberUpper = romanNumber.toUpperCase();
  for(let i = 0; i < romanNumberUpper.length; i++){
    let dr = romanNumberUpper.charAt(i);
    let drNext = romanNumberUpper.charAt(i + 1);

    if(romanValues[dr + drNext]){
      sum += romanValues[dr + drNext];
      i++;
    }else if(romanValues[dr]){
      sum += romanValues[dr];
    }else{
      return 'Nem ideia do que isto significa!';
    }
  }
  return sum;
}


console.log(romanToDecimal('IVLXIV'));

//merchantsGuideToGalaxy

// Fazer validação de I/X/C/M não podem se repetir mais que 3 vezes exceto se for separado por um número menor
// D/L/V nunca podem ser repetidos um atras do outro
// Converter galatico para romano
