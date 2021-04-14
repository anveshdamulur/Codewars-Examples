///// My solution
function numberOfRectangles(m, n) {
    // Your code here!
    return (m*(m+1)*n*(n+1))/4;
  }
  //////// Another solution by azuaron
  function numberOfRectangles(m, n) {
    return (m * m + m) * (n * n + n) / 4; //Math it!
  }
  ///// another solution /////
  function numberOfRectangles(m, n) {
    var sum = 0;
    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        sum += i * j;
      };
    };
    return sum;
  }
console.log(numberOfRectangles(4, 4));
console.log(numberOfRectangles(5, 5));
console.log(numberOfRectangles(3, 2))