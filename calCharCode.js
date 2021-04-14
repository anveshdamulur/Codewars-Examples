function calc(x){
    let result =''
    // iterate through all the char to find char code
    for(let i =0; i < x.length; i++){
        result += x.charCodeAt(i);
    }
    // store into array
    let result1 = result.split('');

    // replace all 7 by 1
    let arr2 = result.replace(/7/g, "1");

    // store into an array
    let result2 = arr2.split('');
    
    // find sum of first array
    const sumOfresult1 = result1.map(x => +x).reduce((a,b) => a+b);

    //find sum of second array
    const sumOfresult2 = result2.map(x=>+x).reduce((a,b) => a+b);
    
    // subtract both array sum
    const finaResult = sumOfresult1 - sumOfresult2;
    return finaResult;    
}



console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
