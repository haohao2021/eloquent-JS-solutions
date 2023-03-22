function reverseArray(array) {
    let reversedArray = [];
    for (let value of array) {
      reversedArray.unshift(value);
    }
    return reversedArray;
  }
  
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}