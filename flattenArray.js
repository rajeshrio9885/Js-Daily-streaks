const arr = [1, 2, [3, 4, [5, 6]]];

//flat array using recursive method
function flattenArray(array) {
  let flatArr = [];
  for (let val of array) {
    if (Array.isArray(val)) {
      flatArr = flatArr.concat(flattenArray(val));
    } else {
      flatArr.push(val);
    }
  }
  return flatArr;
}

console.log(flattenArray(arr));
