function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  const sheep = arrayOfSheep;
  let count =0;
  sheep.filter(item =>{
      if(item == true){
        count =count +1;
      }
  })
  return count;
}
// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     let count =0;
//     return arrayOfSheep.filter(item => item === true ? count+1 : "no sheep found")
// }

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps(array1))