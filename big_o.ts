/**
 \----------------------------------------------------------
 \ Big O Time Complexity
 \----------------------------------------------------------
 \
 \ O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)
 \
 */

/**
 * O(1)
 * Constant Time
 */
function getFirstArrValue<T>(arr: T[]): T {
  return arr[0];
}

/**
 * O(N)
 * Linear Time
 */
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/**
 * O(2^N)
 * Exponential Time
 */
function fibonacci(n: number): number {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * O(N^2)
 * Quadratic Time
 */
function findPairs(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Outer Loop: ${arr[i]}`);
    for (let j = 0; j < arr.length; j++) {
      console.log(`Inner Loop: ${arr[j]}`);
    }
    console.log("\n");
  }
}

/**
 * O(log N)
 * Logarithmic Time (only work on sorted array)
 */
function findNumber(arr: number[], target: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mid: number = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

/**
 * O(N log N)
 * Linearithmic Time
 * slower than O(N), faster than O(N^2)
 */
function printSteps(n: number): void {
  let step: number = 0;

  for (let i = 0; i < n; i++) { // N
    for (let j = n; j > 1; j = Math.floor(j / 2)) { // log N
      step++;
    }
  }

  console.log(step);
}
