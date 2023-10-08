console.time("prime");
const prime = [2, 3];
for (let i = 5; i < 1000000; i++) {
  let l = prime.length;
  let possiblePrime = true;

  for (let j = 0; j < l; j++) {
    if (i % prime[j] === 0) {
      possiblePrime = false;
    }
  }
  if (possiblePrime) {
    prime.push(i);
    console.log(i);
  }
}
console.timeEnd("prime");
