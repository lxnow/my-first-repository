let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

console.log(Object.entries(person));

let nestedPerson = [];

for (let i in Object.keys(person)) {
  let holdingKey = (Object.keys(person)[i]);
  let holdingArr = [holdingKey, person[holdingKey]];
  nestedPerson.push(holdingArr);
}

console.log(nestedPerson);

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}