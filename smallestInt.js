class SmallestIntegerFinder {
  findSmallestInt(args) {
      var smallestEle = args[0];
      args.map(el =>{
            if(el < smallestEle){
                smallestEle = el;
            }
        });
    return smallestEle;   
    }      
}

let data = new SmallestIntegerFinder();

console.log(data.findSmallestInt([34, -345, -1, 100]));