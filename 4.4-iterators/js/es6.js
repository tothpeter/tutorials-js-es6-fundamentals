'use strict';

+function(){
  var mySet = new Set(['a', 'b', 'c']),
      items = mySet.entries();

  // console.log(items);
  // console.log(items.next());

  let myMap = new Map([['a', 1], ['b', 2]]),
      mapItems = myMap.entries();

  // console.log(mapItems.next());
  // console.log(mapItems.next());
  // console.log(mapItems.next());

  let setValues = mySet.values(),
      mapValues = myMap.values();

  console.log(setValues);
  console.log(mapValues);

  let mapKeys = myMap.keys();

  console.log(mapKeys);
}();
