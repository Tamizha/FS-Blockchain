function insertDashes(num){
    let strVal=num.toString();
    let result=[strVal[0]];
    for(let index = 1; index<strVal.length;index++)
    {
        if(strVal[index-1]%2===0 && strVal[index]%2===0)
        {
          result.push('-',strVal[index]);
        }
        else
        {
          result.push(strVal[index]);
        }
      }
    console.log(result.join(''))
}

insertDashes(225468);

