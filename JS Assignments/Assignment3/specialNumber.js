function factorial(val){
    let fact=1;
    for(let index=1;index<=val;index++){
        fact*=index;
    }
    return fact;
}

function isSpecialNumber(num){
    let temp=num,sumOfNum=0;

    while(temp){
        sumOfNum += factorial(temp%10);
        temp = Math.floor(temp/10);
    }

    if(sumOfNum == num){
        console.log("The Number is Special");
    }
    else{
        console.log("The Number is NOT Special");
    }
}

isSpecialNumber(145);