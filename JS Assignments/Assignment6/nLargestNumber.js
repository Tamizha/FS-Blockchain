const arr1 = [3, 45, 6, 7, 23, 5, 7, 8];

function findLargest(nLargestNumberToFind) {
  arr1.sort(function (a, b) {
    return a - b;
  });

  if (nLargestNumberToFind > arr1.length) {
    return("Index greater than size of the array");
  } else if (arr1.length > 0 && nLargestNumberToFind <= 0) {
    return("Please provide with proper index");
  } else if (arr1.length == 0) {
    return ("No items in Array");
  } else {
    return arr1[nLargestNumberToFind - 1];
  }
}

console.log(findLargest(3));