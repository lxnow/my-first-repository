let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = Object.fromEntries(nestedArray);
console.log(obj);

let person = {};
for (let property in nestedArray) {
  person[nestedArray[property][0]] = nestedArray[property][1];
}

console.log(person);