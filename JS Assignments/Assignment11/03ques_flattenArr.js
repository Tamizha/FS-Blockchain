function flatArr(arr){
    let flatArray = [].concat(...arr);
    console.log(`Flattened Array: ${flatArray}`);
}


let arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
flatArr(arr);