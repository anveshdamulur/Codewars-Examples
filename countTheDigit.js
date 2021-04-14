function nbDig(n, d) {
    // your code
    let number = n;
    let digit = d;
    let square  = [];
  x
    for(let i=0; i <= number; i++ ){
       let k = i * i;
        square.push(k)

      }
    return square.toString().match(digit)
}
console.log(nbDig(25, 1));
                                                                                                