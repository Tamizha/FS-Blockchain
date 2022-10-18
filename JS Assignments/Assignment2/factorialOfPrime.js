function factorial(val){
    let fact=1;
    for(let index=1;index<=val;index++){
        fact*=index;
    }
    console.log(`The factorial of ${val} is: ${fact}`);
}

function isPrime(val){
    if(val<=1){
        return false;
    }
    for(let index=2;index<=Math.sqrt(val);index++){
        if(val%index==0){
            return false;
        }
    }
    return true;
}

function primeFactorial(range1,range2){
    for(let index=range1;index<=range2;index++){
        if(isPrime(index)){
            factorial(index);
        }
    }
}

primeFactorial(1,100);