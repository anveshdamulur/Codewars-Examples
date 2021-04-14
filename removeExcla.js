function removeExcla(s){
//     let result = s;
//     console.log(result.length)
//     console.log(result[1])
//    for(let i = 0; i < result.length; i++){
//        if(result[i] !== '!'){
//           result = result.replace('!',"");
//        }
//    }
//     return result;

    return s.replace(/!/gi, '');
}

console.log(removeExcla("Hello!!! This is anvesh ! damuluri!"));