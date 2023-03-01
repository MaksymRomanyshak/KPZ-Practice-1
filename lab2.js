// Create a generator function that generate an infinite sequence of numbers
const primeNumGenerator = function* () {
  // Start with random number in range from 1 to 20
  let number = Math.trunc(Math.random() * 20) + 1;

  // Create an infinite loop
  while (true) {
    // Yield the currrent number in the sequence
    yield number;

    // Increment the number to generate the next number in the sequence
    number++;
  }
};

// Create a generator object from the function
const generator = primeNumGenerator();

// Use 'next()' method provided by generator object
// Log to the console generated numbers in the sequence
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
