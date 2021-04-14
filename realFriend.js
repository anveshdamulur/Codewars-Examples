// using standard techniques

function friends(arr){
    const realFriends = [];
    for(let i = 0; i <arr.length; i++){
        const friends = arr[i];
        if(friends.length === 4){
            realFriends.push(friends);
        }
    }
    return realFriends;
}

// using for each

function friends(arr){
const realFriends = [];
   arr.forEach(element => {
        if(element.length === 4){
            return realFriends.push(element);
        }
    });
    return realFriends;
}

// using filter

function friends(arr){
    return arr.filter(element => element.length === 4);
}
    

console.log(friends(["anvesh", "suraj","sai", "anji", "satya"]));