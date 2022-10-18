function printPattern(rows) {
  let counter=1;
  for (let index1 = 1; index1 <= rows; index1++) {
    for (let index2 = 1; index2 <= index1; index2++) {
      process.stdout.write(`${counter}    `);
      counter++;
    }
    console.log();
  }
}


printPattern(4);
printPattern(5);
