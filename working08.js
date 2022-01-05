function catAge(humanAge) {
  let result = 0;
  while (humanAge > 0) {
    if (humanAge === 1) {
      result = result + 15;
    } else if (humanAge === 2) {
      result = result + 9;
    } else {
      result = result + 4;
    }
    humanAge -= 1;
  }
  console.log(result);
  return result;
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32