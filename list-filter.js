function filter(items){

    // formal way
        const filterItems =[];

        for(let i = 0; i < items.length; i++ ){
            let checkNumber = items[i];
            if(typeof(checkNumber) === 'number'){
                filterItems.push(checkNumber);
            }
        }
        return filterItems;
    // using filter method
        return items.filter(item => typeof(item) === 'number')
}

console.log(filter([1,2,'a','b']));