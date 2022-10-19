function truncateStr(str){
    if(str.length<=4){
        console.log(str);
    }
    else{
        console.log(`${str} truncated as: ${str.substring(0,4)}`);
    }
}

truncateStr("ICE");
truncateStr("ICECream")