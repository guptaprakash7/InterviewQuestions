const rightTriangle = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "\n";
  }

  console.log(result);
};

//rightTriangle();

const leftTriangle = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      result += " ";
    }
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "\n";
  }

  console.log(result);
};

//leftTriangle();

const inverseRightTriangle = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 6 - i; j++) {
      result += j;
    }
    result += "\n";
  }

  console.log(result);
};

//inverseRightTriangle();

const inverseLeftTriangle = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j < i; j++) {
      result += " ";
    }
    for (let j = 1; j <= 6 - i; j++) {
      result += j;
    }
    result += "\n";
  }

  console.log(result);
};

//inverseLeftTriangle();

var a = 5;
let a = 6;
console.log(a);




//print the "abcdefghijk" like this "abdcefhgijk"

let str = "abcdefghijk";
let outStr = "";
let canSkip = false;
let firstBlock = false;
for (let i = 0; i < str.length; i++) {
  if (i % 2 !== 0 || i == 0) {
    if (canSkip) {
      outStr += str[i + 1];
      canSkip = false;
      firstBlock = true;
      continue;
    }
    outStr += str[i];
  } else {
    if (firstBlock) {
      firstBlock = false;
      continue;
    }
    outStr += str[i + 1] ? str[i + 1] : str[i];
    if (str[i + 1]) {
      outStr += str[i];
    }
    canSkip = true;
  }
}

console.log(outStr);
