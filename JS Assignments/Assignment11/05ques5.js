
function thirdLargest(arr, arr_size) {
  /* There should be
at least three elements */
  if (arr_size < 3) {
    console.log(" Invalid Input ");
    return;
  }
  let first = arr[0];
  for (let i = 1; i < arr_size; i++) if (arr[i] > first)   first = arr[i];
  let second = Math.min(...arr);
  let third = second;
  for (let i = 0; i < arr_size; i++)
    if (arr[i] < first ){
      if(arr[i] > second){
        second = arr[i];
      }
    }
  for (let i = 0; i < arr_size; i++)
    if (arr[i] > third && arr[i] < second) third = arr[i];
  console.log("The third Largest " + "element is ", third);
}
let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;
thirdLargest(arr, n);
thirdLargest([-1,-2,-3,-4,-5],5)
thirdLargest([0,0,0,0,0],5)
thirdLargest([-2,-1,0,1,2],5)