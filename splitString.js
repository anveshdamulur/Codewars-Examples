function solution(str) {
  let result = [];
  console.log(str.length)
  for(let i=0; i<str.length; i +=2){
      console.log(`the value of i is ${i}`);
      console.log(`the value of i is ${str.length-1}`);
      if(i === str.length-1){
        result.push(str.slice(i)+"_");
      }
      else{
        result.push(str.slice(i, i+2))
      }
  }

    return result
}

console.log(solution("abcdefg"));
