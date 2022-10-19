function toUpperCase(str) {
  console.log(`${str} to upper case: ${str.toUpperCase()}`);
}

function convertFirstCharToUpperCase(str) {
  if (!str || str.length < 1) {
    console.log("Enter a proper String");
  } else {
    console.log(
      `First character of ${str} to Upper Case: ${
        str.charAt(0).toUpperCase() + str.slice(1)
      }`
    );
  }
}

function toLowerCase(str) {
  console.log(`${str} to lower case: ${str.toLowerCase()}`);
}

function swapStrings(str) {
  if (str.length < 1) {
    console.log("Empty string");
  } else if (str.length == 1) {
    console.log(str);
  } else {
    let strVal = str.substr(0, str.length / 2);
    strVal = strVal + " " + str.substr(str.length / 2, str.length);
    let wordArr = strVal.split(" ");
    let temp = wordArr[0];
    wordArr[0] = wordArr[1];
    wordArr[1] = temp;
    console.log(`${str} split into two and swapped: ${wordArr.join("")}`);
  }
}

function countRepeatingChar(str) {
  if (str) {
    let countObj = {};
    let repeatChars = new Set();
    for (let index = 0; index < str.length; index++) {
      if (countObj[str[index]]) {
        countObj[str[index]] += countObj[str[index]];
        repeatChars.add(str[index]);
      } else {
        countObj[str[index]] = 1;
      }
    }
    if (repeatChars) {
        process.stdout.write(`Characters repeated in the word ${str} is: `);
      

      for (let repeatChar of repeatChars.values()) {
        process.stdout.write(repeatChar+" ");
      }
      console.log();
    }
    else{
        console.log("No characters are repeated");
    }
  }
  else{
    console.log("Enter a valid String!");
  }
}

function reverseString(str) {
  console.log(`${str} reversed: ${str.split("").reverse().join("")}`);
}

toUpperCase("hello");
convertFirstCharToUpperCase("hello");
toLowerCase("HELLO");
swapStrings("hello");
countRepeatingChar("helloo");
reverseString("hello");
