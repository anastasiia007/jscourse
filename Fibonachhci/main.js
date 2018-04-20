let n = 15;
let fib = [0, 1];

for (i = 2; i <= n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.slice(0, n));
