// O(log N) — Logarithmic time
// binarySearch.js
const { performance } = require("perf_hooks");


function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

// Usage:
const sorted = [1,3,5,7,9,11];

const t0 = performance.now();//t0
binarySearch(sorted, 7);
const t1 = performance.now();//t1
console.log(`getFirst took ${(t1 - t0).toFixed(8)} ms`);//t1-t0


console.log(binarySearch(sorted, 7)); // 3
