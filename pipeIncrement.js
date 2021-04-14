function pipeFix(numbers) {
    var min = numbers[0];
    var max = numbers.pop();
    var result = []
    for (var i = min; i <= max; i++) {
      result.push(i)
    }
    return result;
  }

console.log(pipeFix([1,3,5,6,7,8]));