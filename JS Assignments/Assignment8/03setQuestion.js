let setVal = new Set();
setVal.add(Math.floor(Math.random() * 11));
setVal.add(Math.floor(Math.random() * 11));
setVal.add(Math.floor(Math.random() * 11));
setVal.add(Math.floor(Math.random() * 11));

console.log(setVal);

if(setVal.has(8)){
    console.log("Value 8 is present");
}
else{
    console.log("Value 8 is not present");
}
