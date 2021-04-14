function paul(x){
    let data = {
        "kata" : 5,
        "Petes kata" : 10,
        "life" : 0,
        "eating" : 1

    }
  

    let count = [];
  for(let i in Object(data)){
      console.log(i)
      console.log(data[i])
      x.map(item =>{
          if(item === i){
              count.push(data[i])
          }
      })
  }
  
  let result = count.length > 0 ? count.reduce((a,b) => a+b) : false;
  if(result < 40 ){
      return 'Super happy!';
  }
    else if(result<70 && result >= 40){
        return 'Happy!'
    }
    else if(result < 100 && result >= 70){
        return 'Sad!';
    }
    else{
        return 'Miserable!'
    }
}

console.log(paul(['life', 'eating', 'life']))
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']));
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']));