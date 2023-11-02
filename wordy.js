export const answer = (string) => {
  // Find the first number
  // Find the operator
  // Find the second number

  // String starts with 'What is', first number follows, if not a number, throw error
  // us indexOf("What is"), test what the output is, use the index to slice out what is

  const removeQuestion = string.replace(/What is /g, "");
  const removeQuestionMark = removeQuestion.replace(/\?/g, "");
  const mathProblemArray = removeQuestionMark
    .split("")
    .filter((char) => char !== " ");
  let num1;
  let num2;
  let operand = "";
  let solution;

  for (let i = 0; i < mathProblemArray.length; i++) {
    if (isNaN(parseInt(mathProblemArray[i])) && mathProblemArray[i] !== '-') {
      operand += mathProblemArray[i];
    }
  }
  // so we know that the last letter of the operand + 1 can help us find the starting index of the second num, and the starting index of the array to the first letter of the operand - 1 will give us the first num

  // check if there is an operand, if not, parseInt number
  const indexOfNum1End = mathProblemArray.indexOf(operand[0]);
  const indexOfNum2Start = mathProblemArray.indexOf(operand[operand.length - 1]) + 1;
  console.log(`index of num2 start: ${indexOfNum2Start}`)

  if (operand === "") {
    num1 = parseInt(mathProblemArray.join(""));
  } else {
    num1 = parseInt(mathProblemArray.slice(0, indexOfNum1End).join(""));
    num2 = parseInt(
      mathProblemArray
        .slice(indexOfNum2Start, mathProblemArray.length)
        .join(""));
  }

  switch (operand) {
    case "":
      solution = num1;
      break;
    case "plus":
      solution = num1 + num2;
      break;
    default:
      break;
  }

  return solution;
};
