function revrot(str, sz){
    // your code
    if(str == ""|| sz === 0){
        return "";
    }
    let chunks =[];
    let cuts = Math.floor(str.length/sz);
    let cut =0;
    while(cuts > cut){
        chunks.push(str.slice(cut*sz, sz * (cut+1)));
        cut++;
    }
   
   for(let j =0; j< chunks.length; j++){
       if(divByTwo(chunks[j])){
          chunks[j] = reverse(chunks[j]);
       }
       else{
           chunks[j] = rotate(chunks[j])
       }
   }
   return chunks.join("")
}

function reverse(str){
    return str.split("").reverse().join("")
}

function rotate(numStr){
    return numStr.slice(1) + numStr[0];
}

function divByTwo(numStr){
    let num =0;
    for(let i =0; i< numStr.length; i++){
        num += Math.pow(numStr[i],3)
    }
    return num % 2 === 0;
}

console.log(revrot("123456987654",6)); 

