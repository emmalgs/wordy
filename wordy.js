export const answer = (string) => {
  const removeQuestion = string.replace(/What is /g, "");
  const removeQuestionMark = removeQuestion.replace(/\?/g, "");
  const removeBy = removeQuestionMark.replace(/ by/g, "");
  const mathProblemArray = removeBy.split(" ");
  const checkedMathArray = checkArrayForErrors(mathProblemArray);
  const solution = mathmatize(checkedMathArray);
  return solution;
};

const mathmatize = (array) => {
  let solution = parseInt(array[0]);
  let currentOperation = null;

  array.forEach((el) => {
    if (!isNaN(parseInt(el))) {
      if (currentOperation === "plus") {
        solution += parseInt(el);
      } else if (currentOperation === "minus") {
        solution -= parseInt(el);
      } else if (currentOperation === "multiplied") {
        solution *= parseInt(el);
      } else if (currentOperation === "divided") {
        solution /= parseInt(el);
      }
    } else if (isNaN(parseInt(el))) {
      currentOperation = checkOperatorForErrors(el);
    }
  });
  return parseInt(solution);
};

const checkOperatorForErrors = (string) => {
  if (
    string === "plus" ||
    string === "minus" ||
    string === "divided" ||
    string === "multiplied"
  ) {
    return string;
  } else {
    throw new Error("Unknown operation");
  }
};

const checkArrayForErrors = (array) => {
  const numberRegex = /\d/g;
  const lastIndex = array.length - 1;
  if (
    array[0] === "What" ||
    (!isNaN(parseInt(array[lastIndex])) &&
      !isNaN(parseInt(array[lastIndex - 1]))) ||
      checkOperatorForErrors(array[lastIndex])
  ) {
    throw new Error("Syntax error");
  } else if (!numberRegex.test(array.join(""))) {
    throw new Error("Unknown operation");
  } else {
    return array;
  }
};

const checkForRejects = (str1, str2) => {
  return (typeof parseInt(str1) === typeof parseInt(str2))
}
