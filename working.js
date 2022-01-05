isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

function isBlank(strToTestForBlanks) {
  console.log(!strToTestForBlanks.trim()) 
}