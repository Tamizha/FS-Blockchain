function replaceWords(str){
    console.log(`Before Replacement: ${str}`)
    let wordArr = str.split(" ");
    let temp = wordArr[0];
    wordArr[0] = wordArr[1];
    wordArr[1] = temp;
    console.log(`After Replacement: ${wordArr.join(" ")}`);
}

replaceWords("Hii Boy");