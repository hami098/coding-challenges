// O(N) — Linear time
// sumArray.js
function sumArray(arr) {
  let total = 0;
  for (let x of arr) {
    total += x;
  }
  return total;
}

// Usage:
console.log(sumArray([1,2,3,4,5])); // 15
