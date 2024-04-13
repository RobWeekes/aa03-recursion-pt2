/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


function addToTwelve(arr) {

  if(arr.length === 0){
      return false;
  }
  if(arr.length !== 0){
      let last = arr[arr.length - 1]
      console.log(last)
  if (last + arr[arr.length - 2] === 12){
      return true;
  } else {
      arr.pop(last);
      console.log(arr);
      return addToTwelve(arr);
  }
  }
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false


  // Davidson

// let newArr = [];
function addToTwelve2(arr) {
  // debugger
  // console.log(arr);
  // arr.slice(1);       // slice doesnt change the original arr
  // console.log(arr);
  // newArr = arr.slice(1);
  // console.log(newArr);   // dont need newArr, passing in sliced array on line 63

  if(arr.length === 0 ){
      return false;
  }

  if(arr.length !== 0){
      let last = arr[arr.length - 1];
      console.log(last);
      if(arr[0] + arr[1] === 12){
          return true;
      }
      else {
          // return addToTwelve2(arr.slice(1));
          return addToTwelve2(arr.slice(1));
      }
  }
}

console.log(addToTwelve2([1, 3, 4, 7, 5])); // true
console.log(addToTwelve2([1, 3, 4, 7, 6])); // false
console.log(addToTwelve2([1, 11, 4, 7, 6])); // true
console.log(addToTwelve2([1, 12, 4, 7, 6])); // false
console.log(addToTwelve2([1])); // false



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
