class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    area(){
        return this.length*this.breadth;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
        this.side = side;
    }
}


let rect = new Rectangle(2,4);
console.log(rect.area());

let squa = new Square(5);
console.log(squa.area());