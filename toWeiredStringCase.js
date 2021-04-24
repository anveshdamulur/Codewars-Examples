function toWeirdCase(string){
    let input = string.split("");
   
    let index = 0;
    for (index = 0; index < input.length; i++) {
        if(input[index] == " "){
          index = -1;
        }
        else if(i%2 === 0){
          input[i] = input[i].toUpperCase();
        }
        else{
          input[i] = input[i].toLowerCase()
        }
 
    }
    return input.join("");
}

console.log(toWeirdCase('This is a test'));