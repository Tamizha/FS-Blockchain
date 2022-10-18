function findGrade(mark){
    switch(true){
        case mark>90 :
            console.log("The grade of the student is: S");
            break;
        case mark>80 :
            console.log("The grade of the student is: A");
            break;
        case mark>70 :
            console.log("The grade of the student is: B");
            break;
        case mark>60 :
            console.log("The grade of the student is: C");
            break;
        case mark>50 :
            console.log("The grade of the student is: D");
            break;
        case mark>40 :
            console.log("The grade of the student is: E");
            break;
        case mark>0 :
            console.log("The grade of the student is: F");
            break;
        default:
            console.log("Invalid Marks");
    }
}


findGrade(95);
findGrade(90);
findGrade(77);
findGrade(70);
findGrade(51);
findGrade(48);
findGrade(35);
findGrade(-12);