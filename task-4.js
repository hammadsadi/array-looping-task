//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = "I am a hard working person";
let statementConvert = statement.split(" ");
statementConvert = statementConvert.reverse();
let convertString = statementConvert.join(" ");
console.log(convertString);
