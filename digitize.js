function digitize(n) {
    // return n.toString().split('').map(n => Number(n)); 

    return String(n).split('').map(Number);

}

console.log(digitize(123));
