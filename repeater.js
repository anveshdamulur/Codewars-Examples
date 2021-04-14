function repeater(string, n){
 //Your code goes here.
    let result = [];
    for(let i=0; i<n; i ++){
        result += string;
    }
    return result;
}

// using repeat method
  function repeater(string, n){
    return string.repeat(n)
  }
  console.log(repeater('a', 5))
  console.log(repeater('Na', 16))
  console.log(repeater('Wub ', 6))