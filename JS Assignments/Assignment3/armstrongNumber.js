
function count(num){
    let digitCount=0;
    while(num){
        digitCount++;
        num=Math.floor(num/10);
    }
    return digitCount;
}


function isArmstrong(num){
    let numberOfDigits = count(num);
    let temp=num;
    let sum=0;

    while(temp){
        sum += Math.pow(temp%10,numberOfDigits) ;
        temp=Math.floor(temp/10);
    }

    if(sum == num){
        console.log("Armstrong Number");
    }
    else{
        console.log("Not a Armstrong Number");
    }
}

isArmstrong(153);
isArmstrong(0);
isArmstrong(1);
isArmstrong(1634);
isArmstrong(87);