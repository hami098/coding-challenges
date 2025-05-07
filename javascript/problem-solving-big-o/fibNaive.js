// O(2ᴺ) — Exponential time
// fibNaive.js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Usage:
console.log(fib(5)); // 5
