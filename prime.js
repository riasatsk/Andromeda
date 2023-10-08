console.time("prime");

const prime = [2, 3];
let l = 2;
for (let i = 5; i < 1000000; i++) {
  let possiblePrime = true;

  for (let j = 0; j < l; j++) {
    if (i % prime[j] === 0) {
      possiblePrime = false;
    }
  }
  if (possiblePrime) {
    prime.push(i);
    l = l +1;
    console.log(i);
  }
}
console.timeEnd("prime");
