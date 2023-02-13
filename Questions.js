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

inverseLeftTriangle();
