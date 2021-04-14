function inArray(arr1, arr2){
    const result = [];
    arr2.forEach(word =>{
        arr1.forEach(end =>{
            if(word.endsWith(end)){
                result.push(end)
            }
        })
    })
   return [...new Set(result)]
  
}

let a1 = ["xyz", "live", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1,a2))