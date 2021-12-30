function checkNegZero(value){
  return 1 / value === -Infinity;
}

console.log(checkNegZero(-0));
console.log(checkNegZero(0));
console.log(checkNegZero(12));
console.log(checkNegZero('laurence'));

