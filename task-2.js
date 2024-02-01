// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
let enenNumbers = [];
for (let item of numbers) {
  if (item % 2 === 0) {
    enenNumbers.push(item);
  }
}
console.log(enenNumbers);
