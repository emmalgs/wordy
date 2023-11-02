export const answer = (string) => {
  const removeQuestion = string.replace(/What is /g, "");
  const removeQuestionMark = removeQuestion.replace(/\?/g, "");
  const removeBy = removeQuestionMark.replace(/ by/g, "");
  const mathProblemArray = removeBy
    .split(" ")
  return mathmatize(mathProblemArray)
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
      if (
        el === "plus" ||
        el === "minus" ||
        el === "divided" ||
        el === "multiplied"
      ) {
        currentOperation = el;
      } else {
        throw Error("Unknown operation");
      }
    }
  });
  return parseInt(solution);
};

const checkForSyntaxErrors = (array) => {
  if (array[0] === "") {
    throw Error('Syntax error')
  }
}
