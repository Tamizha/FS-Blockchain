function checkIsLower(str){

    if(!str || str.length<1){
        console.log("Enter a proper String");
    }
    else if(str[0]>="a" && str[0]<="z"){
        console.log("The first character is Lower case")
    }
    else{
        console.log("The first character is NOT Lower case")
    }
}


checkIsLower("hello");