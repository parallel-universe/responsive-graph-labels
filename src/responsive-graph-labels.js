import primesFactors from 'primes-and-factors';

const factors = primesFactors.getUniqueFactors(18);

const something = `wefwefew${factors[0]}`;

console.log(something.length);
let test = 'ewef' + something.length + 'wefwefw';
console.log(test);
