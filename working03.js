// first(['Earth', 'Moon', 'Mars']); // 'Earth'

// function first (arrInput) {
//   console.log(arrInput[0]);
//   return arrInput[0];
// }

// first([]);

// last(['Earth', 'Moon', 'Mars']); // 'Mars'

// function last (arrInput) {
//   console.log(arrInput[arrInput.length -1]);
//   return arrInput[arrInput.length - 1];
// }

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// energy.shift();
// energy.push(`geothermal`);
// console.log(energy);

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let alphabetArray = [];

// for (let i = 0; i < alphabet.length; i += 1){
//   alphabetArray.push(alphabet[i]);
// }

// console.log(alphabetArray);

// console.log(alphabet.split(''));
// console.log(Array.from(alphabet));

// let scores = [96, 47, 113, 89, 100, 102];

// console.log(scores.filter(x => x > 100).length);

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// // Expected output:
// // happy
// // cheerful
// // merry
// // etc...

// for (let i = 0; i < vocabulary.length; i++) {
//   // console.log(vocabulary[i]);
//   for (let j = 0; j < vocabulary[i].length; j++) {
//     console.log(vocabulary[i][j]);
//   }
// }

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

function contains(location, listToCheck) {
  // for (let i = 0; i < listToCheck.length; i++) {
  //   if (listToCheck[i] === location) {
  //     return true;
  //   } 
  // }
  // return false;
  return listToCheck.indexOf(location) >= 0;
}