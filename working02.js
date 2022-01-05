let testStr = 'launch school tech & talk';

function capFirstLetter(strToChange) {
  let result = strToChange[0].toUpperCase();
  for (let i = 1; i < strToChange.length; i += 1){
    if (strToChange[i-1] === ' ') {
      result = result + strToChange[i].toUpperCase();
    } else {
      result = result + strToChange[i];
    }
  }
  return result;
}

console.log(capFirstLetter(testStr));