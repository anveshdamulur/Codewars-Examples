function duplicateCount(text){
    let count = 0;

    if(text === ""){
        return count;
    }
    let inputText = text.toLowerCase();
    for(let i=0; i < inputText.length; i++){
        if(inputText[i] == inputText[i+1]){
           console.log(`char at ${inputText[i]} and ${inputText[i+1]}`);
           count++;
        }
        
    }
    return count;
  }

  console.log(duplicateCount("aabbcde"));
  
  