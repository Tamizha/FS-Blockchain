function checkOccurence(str,text){
    if(str.includes(text)){
        console.log(`Text ${text} is present in the string ${str}`)
    }
    else{
        console.log(`Text ${text} is not present in the string ${str}`)
    }
}


checkOccurence("hello","l");