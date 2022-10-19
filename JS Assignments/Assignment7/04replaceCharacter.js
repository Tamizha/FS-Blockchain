function replaceCharacter(str,toReplace,withReplace){
    console.log(`Before Replacement: ${str}`)
    str=str.replaceAll(toReplace,withReplace);
    console.log(`After Replacement: ${str}`);
}

replaceCharacter("apple","a","x")