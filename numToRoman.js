function convertNumToRoman(num) {
    // The main and edges of roman literals
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    // to store the final output
    var outputString = '';
    // Getting object values and keys
    for (let i of Object.keys(roman)) {
        //check num divisible by roman key value
        var divideByValue = Math.floor(num / roman[i]);
        // remove the q value from given numer
        num -= divideByValue * roman[i];
        // check unti the value of q is not equal to zero
        if(divideByValue !== 0 ){
            outputString += i.repeat(divideByValue);
        }
    }
    return outputString;
  }
console.log(convertNumToRoman(34));
console.log(convertNumToRoman(3609));
console.log(convertNumToRoman(3));
console.log(convertNumToRoman(4));
console.log(convertNumToRoman(90));
console.log(convertNumToRoman(80));
console.log(convertNumToRoman(499));

