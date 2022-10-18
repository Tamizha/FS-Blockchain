function matchHouses(step){
    if(step<1){
        return 0;
    }
    return (step*6)-(step-1);
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
console.log(matchHouses(0));