/*
    1.) Higher Order Functions and Call back Functions are not the same.
        Higher order function is a function which takes another function as argument or returns a function as value.
        Callback function in other hand is a function passed as parameter to another function.
*/

/*
    2.) Filter is a higher order function in Javascript.
        The Filter method executes a callbacck method on each element in an array. Hence it is a Higher order Function

*/

/*
    3.) 
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

*/

/* 
    4.)
        a.) The output of the given program is:
            Hello John
            Hello Tina
            Hello Kale
            Hello Max

        b.) useFunction is the Higher Order Function because it takes the argFn(which is a function) as an argument.
*/
