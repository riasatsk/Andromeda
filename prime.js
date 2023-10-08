function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

const start_time = new Date().getTime();

const primes = [2, 3];
for (let i = 5; i < 100; i++) {
  if (isPrime(i)) {
    primes.push(i);
    console.log(i);
  }
}

const end_time = new Date().getTime();
const execution_time = (end_time - start_time) / 1000; // Convert to seconds
console.log("Execution Time: " + execution_time.toFixed(6) + " seconds");
