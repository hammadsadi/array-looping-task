// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ["Tom", "Tim", "Tin", "Tik"];
let resultString = "";

for (let item of numbers) {
  resultString += item;
}

console.log(resultString);
