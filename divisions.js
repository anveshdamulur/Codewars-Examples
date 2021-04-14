const divisions = (n, divisor) => {
    let count =0;
    while(n >= divisor){
        let res = Math.floor(n/divisor);
        if(res){ 
            n = res;
            count ++;
        }
    }
    return count;
  };

  console.log(divisions(100, 2));