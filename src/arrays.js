// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let tenGreater = []
  for ( let index = 0; index < numbers.length; index++){
    if (numbers[index] > 10) {
      tenGreater.push(numbers[index]);
    }
  }
  return tenGreater;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const startsWithB = words.filter((word) => word.startsWith("b") || word.startsWith("B") );
return startsWithB;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  for ( let index = 0; index < additionalItems.length; index++){
    originalArray.push(additionalItems[index]);
  }
  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let lenghtyItem = [];
  for ( let index = 0; index < items.length; index++){
    if  (items[index].length === length)
    lenghtyItem.push(items[index]);
  }
return lenghtyItem;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let otherItems = [];
  for ( let index = 0; index < items.length; index+=2){
    otherItems.push(items[index]);
  }
  return otherItems;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let startsWithLetter = [];
  for ( let index = 0; index < words.length; index++){
    if (words[index].startsWith(letter)){
      startsWithLetter.push(index);
    }
  }
return startsWithLetter;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  return items.slice(0, n).reverse();
  }

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for ( let index = 0; index < items.length; index++){
    if ( items[index] === value){
      return index 
    }
  }
}


// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let subset = [];
  for (let index = start; index <= stop; index++){
    subset.push(index);
  }
  return subset;
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
