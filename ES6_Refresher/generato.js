function* exampleGenerator() {
  yield "Hello";
  yield "World";
  return "Done";
}

const generator = exampleGenerator();

console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: 'Done', done: true }
console.log(generator.next()); // { value: undefined, done: true }


//Infinite Generators: Generators can create infinite sequences.
function* infiniteNumbers() {
    let num = 1;
    while (true) {
        yield num++;
    }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
console.log(numbers.next().value); // 4




