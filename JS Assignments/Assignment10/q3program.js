function filterFuncWithCallback(arr, callbackFuncEg) {
  if (arr.length < 1) {
    console.log("Empty Array");
    return;
  }
  process.stdout.write("The Odd Numbers are: ")
  for (let i = 0; i < arr.length; i++) {
    if (callbackFuncEg(arr[i])) {
      console.log(arr[i]);
    }
  }
}

function isOdd(x) {
  return x % 2 != 0;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterFuncWithCallback(arr, isOdd);
filterFuncWithCallback([], isOdd);
