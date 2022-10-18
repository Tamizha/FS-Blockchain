let sum=0;

for(let index=1;index<=1000;index++){
    if(index%3==0 && index%5==0){
        sum+=index;
    }
}

console.log(`The sum of the multiples of 3 and 5 less than 1000 is: ${sum}`);