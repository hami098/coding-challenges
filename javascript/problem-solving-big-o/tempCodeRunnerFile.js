const { performance } = require("perf_hooks");

function getFirst(arr) {
  return arr[0];
}

const a = [4, 2, 9, 7];

const t0 = performance.now();
getFirst(a);
const t1 = performance.now();
console.log(`getFirst: ${(t1 - t0).toFixed(3)} ms`);
