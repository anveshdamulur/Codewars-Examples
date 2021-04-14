function highAndLow(numbers) {
    var smallNumber=numbers[0];
    var heistNumber=numbers[0];
    numbers = numbers.split(" ")
    numbers.map(el => { 
       if(+el < +smallNumber){
            smallNumber = el;
       }
       if(+el > +heistNumber){
            heistNumber = el;
       }
    })
    return `${smallNumber} ${heistNumber}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))