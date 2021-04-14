function toTime(seconds) {
    //code here
    let hour = Math.floor(seconds/3600);
    let minutes = Math.floor(seconds/60)
    if(minutes == 60){
        return 0;
    }
    return `${hour} hour(s) and ${minutes} minute(s)`
  
    
}

console.log(toTime(323500));
