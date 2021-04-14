function openSenior(){
    let data = [
        [45,12], [55,21], [19, -2]
    ]
    let str =''
  let result = data.map((el,index) =>{
        el.map(item=>{
            if(item <= 55) {
              return 'senior'
            }
            
        })
        
    }
    
    )
    return result; 
}


console.log(openSenior())