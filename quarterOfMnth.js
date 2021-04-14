const quarterOf = (month) =>{
    if(month <= 3){
        return 1;
    }
    if(month > 3 && MOnth <= 6 ){
        return 2;
    }
    if(month > 6 && MOnth <= 9){
        return 3;
    }
    else{
        return 4;
    }
}
// using ceil

const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);
  }
