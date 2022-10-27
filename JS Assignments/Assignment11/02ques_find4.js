function findFour(arr1,arr2, isFourPresesnt) {
  let fourInArrOne = (fourInArrTwo = 0);
  for (let i = 0; i < arr1.length; i++) {
    if (isFourPresesnt(arr1[i])) {
      fourInArrOne = 1;
      break;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (isFourPresesnt(arr2[i])) {
        fourInArrTwo = 1;
      break;
    }
  }

  if(fourInArrOne && fourInArrTwo){
    console.log("4 in both arrays");
  }
  else if(fourInArrOne){
    console.log("4 in Array 1");
  }
  else if(fourInArrTwo){
    console.log("4 in Array 2");
  }
  else{
    console.log("4 not found");
  }
}

function isFourPresesnt(x) {
  return x == 4;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 6, 1, 8, 2];
findFour(arr1, arr2, isFourPresesnt);

let arr3 = [ 1, 2, 3, 6, 5];
let arr4 = [ 4, 6, 1, 8, 2];
findFour(arr3, arr4, isFourPresesnt);

let arr5 = [ 1, 2, 3, 4, 5];
let arr6 = [ 5, 6, 1, 8, 2];
findFour(arr5, arr6, isFourPresesnt);

let arr7 = [ 10, 20, 30, 40, 50];
let arr8 = [ 50, 60, 10, 80, 20];
findFour(arr7, arr8, isFourPresesnt);