person1 = {
  name: "Steve",
  age: 18,
};

person2 = {
  name: "Mary",
  age: 22,
};

const arrayPersons = [person1, person2];

console.log(arrayPersons.find((arrElem) => arrElem.age === 22));
