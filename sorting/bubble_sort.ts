/**
 * Bubble Sort
 *
 * Best Case: O(N)
 * Average Case: O(N^2)
 * Worst Case: O(N^2)
 */
function bubbleSort(arr: number[]): number[] {
  const n: number = arr.length;
  let swapped: boolean = false;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
    }
    if (!swapped) break;
  }

  return arr;
}
