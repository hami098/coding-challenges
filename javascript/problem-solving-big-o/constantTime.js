// O(1) — Constant time
// constantTime.js
const { performance } = require("perf_hooks");

function getFirst(arr) {
  return arr[0];
}

// const a = [4, 2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9,2, 9, 7];
const a = [4, 9, 2, 7];


const t0 = performance.now();//t0
getFirst(a);
const t1 = performance.now();//t1

console.log(`getFirst took ${(t1 - t0).toFixed(8)} ms`);//t1-t0
