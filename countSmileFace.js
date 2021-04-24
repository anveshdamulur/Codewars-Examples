//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0 ;
   
        for (let i = 0; i < arr.length; i++) {
          const item = arr[i];
            if(item.length == 2 || item.length == 3){
                if(item[0] == ":" || item[0] == ";"){
                    if(item[1] == "-"  || item[1] == "~"){
                        if(item[2] == ")" || item[2] == "D"){
                             count ++;
                        }
                    }
                    else if(item[1] == ")" || item[1] == "D" && item.length == 2){
                             count ++;
                    }
                }
            } 
        }
    return count;
}


console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));