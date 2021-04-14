function flyBy(lamps, drone){
    let lamp = lamps.split('');
    let dron = drone.split('');
    console.log(lamp.length)
    console.log(dron.length)
    for (let i = 0; i < dron.length ; i++) {
      lamp.splice(i, 1, "o")
    }
    let res = lamp.join("");
    return res;
}

console.log(flyBy('xxx', '===T'));
console.log(flyBy('xxxxxxxxxxxxxxxxxxxxxx', '======================T'))
