// O(N log N) — Linearithmic time
// sortArray.js
function sortNumbers(arr) {
  // JS’s sort is typically O(N log N)
  return arr.slice().sort((a, b) => a - b);
}

// Usage:
console.log(sortNumbers([5,1,4,2,3])); // [1,2,3,4,5]
