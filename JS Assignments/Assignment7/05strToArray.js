/*There are 4 ways to convert a String to array
    1. By using the split method.
    2. By using the spread operatotr.
    3. By using the Array.from() method.
    4. By using Object.assign().*/


    function strToArrayUsingSplit(str){
        console.log(str.split(''));
    }

    function strToArrayUsingSpread(str){
        console.log([...str]);
    }

    function strToArrayUsingArrayFrom(str){
        console.log(Array.from(str));
    }

    function strToArrayUsingObjectAssign(str){
        console.log(Object.assign([],str));
    }


    strToArrayUsingSplit("hello");
    strToArrayUsingSpread("hello");
    strToArrayUsingArrayFrom("hello");
    strToArrayUsingObjectAssign("hello");