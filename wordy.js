export const answer = (string) => {
  const removeQuestion = string.replace(/What is /g, "");
  const removeQuestionMark = removeQuestion.replace(/\?/g, "");
  const mathProblemArray = removeQuestionMark
    .split("")
    .filter((char) => char !== " ");
  const mathArray = getNumbersAndOperatorsArray(mathProblemArray);

  return mathmatize(mathArray);
};

const getNumbersAndOperatorsArray = (array) => {
  let result = [];
  let currentGroup = [];

  for (const char of array) {
    if (char === "-" && isNaN(parseInt(currentGroup[0]))) {
      if (currentGroup.join("") === "") {
        currentGroup = [char];
      } else {
        result.push(currentGroup.join(""));
        currentGroup = [char];
      }
    } else if (isNaN(parseInt(char)) && currentGroup.length === 0) {
      currentGroup.push(char);
    } else if (!isNaN(parseInt(char)) && currentGroup.length === 0) {
      currentGroup.push(char);
    } else if (
      isNaN(parseInt(char)) &&
      isNaN(parseInt(currentGroup.join("")))
    ) {
      currentGroup.push(char);
    } else if (
      !isNaN(parseInt(char)) &&
      (!isNaN(parseInt(currentGroup.join(""))) || currentGroup[0] === "-")
    ) {
      currentGroup.push(char);
    } else {
      result.push(currentGroup.join(""));
      currentGroup = [char];
    }
  }
  if (currentGroup.length > 0) {
    result.push(currentGroup.join(""));
  }

  return result;
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
      } else if (currentOperation === "multipliedby") {
        solution *= parseInt(el);
      } else if (currentOperation === "dividedby") {
        solution /= parseInt(el);
      }
    } else if (isNaN(parseInt(el))) {
      if (
        el === "plus" ||
        el === "minus" ||
        el === "dividedby" ||
        el === "multipliedby"
      ) {
        currentOperation = el;
      } else {
        throw Error("Unknown operation")
      }
    }
  });

  return parseInt(solution);
};
