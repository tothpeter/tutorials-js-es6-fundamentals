'use strict';

+function(){
  function* square(x) {
    var y = (yield x * x) * x;
    console.log('x was: ', x);
    console.log('y was: ', y);
    yield x * x * 2;
  }

  let squareGenerator = square(5);

  console.log(squareGenerator.next());
  console.log(squareGenerator.next(10));
  console.log(squareGenerator.next());
}();
