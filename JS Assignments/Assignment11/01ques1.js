function filterFunction(arr, callback) {
  let sumOfOdd = (sumOfEven = oddElementCount = evenElementCount = 0);
  for (let i = 0; i < arr.length; i++) {
    if (callback(i + 1)) {
      sumOfOdd += arr[i];
      oddElementCount++;
    } else {
      sumOfEven += arr[i];
      evenElementCount++;
    }
  }
  console.log(`Sum of Odd Numbers: ${sumOfOdd}`);
  console.log(`Sum of Even Numbers: ${sumOfEven}`);
  console.log(
    `Difference between sum of Odd and Even is: ${sumOfOdd - sumOfEven}`
  );
  console.log(`Number of Element in Odd place: ${oddElementCount}`);
  console.log(`Number of Element in Even place: ${evenElementCount}`);
  console.log(
    `Average of all the elements: ${
      (sumOfOdd + sumOfEven) / (oddElementCount + evenElementCount)
    }`
  );
  console.log(`GCD of f Sum of Numbers at Odd Places and Sum of Numbers at Even Places is: ${findGCD(sumOfOdd,sumOfEven)}`)
}

function findGCD(val1, val2) {
  while (val1 != val2) {
    if (val1 > val2) {
      val1 = val1 - val2;
    } else {
      val2 = val2 - val1;
    }
  }

  return val2;
}

function isOdd(x) {
  return x % 2 != 0;
}

let arr = [1, 2, 3, 4, 5];
filterFunction(arr, isOdd);
