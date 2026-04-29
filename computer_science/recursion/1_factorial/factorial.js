function factorial(n) {
  if (n < 0 || n % 1 !== 0 || typeof n !== "number") {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Do not edit below this line
module.exports = factorial;

console.log(factorial(5));
