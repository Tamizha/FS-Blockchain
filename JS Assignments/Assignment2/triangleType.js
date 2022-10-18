
function findTriangleType(side1,side2,side3){
    if(side1==side2 && side2==side3){
        console.log("The given triangle is equilateral");
    }
    else if( side1==side2 || side2==side3 || side3==side1 ){
        console.log("The given triangle is isosceles");
    }
    else{
        console.log("The given triangle is scalene");
    }
}


findTriangleType(10,10,10);
findTriangleType(10,20,10);
findTriangleType(10,20,30);