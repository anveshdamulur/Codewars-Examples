function digitize(n){
   let data = Array.from(String(n), Number);
   let result = data.reverse();
   return result;
   ///////////////////////////

   return String(n).split('').map(Number).reverse();
}
console.log(digitize('348795'))