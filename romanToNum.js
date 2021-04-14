function solution(roman){
    // complete the solution by transforming the 
    // string roman numeral into an integer  
    let inputValue = roman.split('')
    let romanObj = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V : 5,
      I : 1
    }
    let result;

    for (let key of Object.keys(romanObj)) {
      console.log(romanObj[key]);
      if(inputValue.search){}
    
    }
    return result
}



console.log(solution('XXI'))
