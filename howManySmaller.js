function howManySmaller(arr,n){
    //coding here..
    let a= [];
    arr.map(item =>{
        a.push(item.toFixed(2));
    })
    let newArr=  a.map(n=> Number(n));
    console.log(newArr)
    let count =0;
   return newArr.filter(value => (Math.round(value) < n));

  }
  
  console.log(howManySmaller([1.234,1.235,1.228],1.24));
  console.log(howManySmaller([1.1888,1.1868,1.1838],1.19));
  console.log(howManySmaller([3.1288,3.1212,3.1205],3.1212));