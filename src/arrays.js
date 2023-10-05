// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let newArray = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] > 10) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("B")) {
      newWords.push(words[i]);
    }
    else if (words[i].startsWith("b")) {
      newWords.push(words[i]);
    }
  }
  return newWords;
}




// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  
  originalArray.push(additionalItems);
  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let onlyThree = [];
  for (let items of array) {
    if (items.length === 3) {
      onlyThree.push([i]);
    }
  }
  return onlyThree;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let everyOther = [];
  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      everyOther.push(items[i]);
    }
  }
  return everyOther;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(letter)) {
      newWords.push(words[i]);
    }
  }
  return newWords;
}
// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  let otherOrder = [];
  for(let n = 0; n < items.length; n++) {
    if(items[n] > n){
      otherOrder.splice(items[n]);
    }
  }
return otherOrder;
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value){
  for(let value = 0; value < items.length; value ++){
    if(value){
      return indexfOf(value)
    }
    else{
      return undefined;
    }
  }
}


// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let newArray = [];
  for (let i = start; i <= stop; i++) {
    newArray.push(i);
  }
  return newArray;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
