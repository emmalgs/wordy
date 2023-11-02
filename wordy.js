export const answer = (string) => {
  // Find the first number
  // Find the operator
  // Find the second number

  // String starts with 'What is', first number follows, if not a number, throw error
  // us indexOf("What is"), test what the output is, use the index to slice out what is

  const removeQuestion = string.replace(/What is /g, "");
  const removeQuestionMark = removeQuestion.replace(/\?/g, "");
  return parseInt(removeQuestionMark);
};
