function handleDuplicate(arr){
    if(arr.length<1){
        console.log("Empty Array");
        return;
    }
    let originalElemets = [];
    let duplicateElements = [];

    for(let index=0;index<arr.length;index++){
        if(originalElemets.includes(arr[index])){
            duplicateElements.push(arr[index]);
        }
        else{
            originalElemets.push(arr[index]);
        }
    }

    console.log(`Duplicate Elements: ${duplicateElements}`);
    console.log(`Array without duplicate elements: ${originalElemets}`);
}

let arr =  [1, 2, 3, 2, 3, 4, 5 ];
handleDuplicate(arr);