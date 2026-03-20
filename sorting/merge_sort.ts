/**
 * Merge Sort
 * 
 * Best Case: O(N log N)
 * Average Case: O(N log N)
 * Worst Case: O(N log N)
 */


function mergeSort(arr: number[]): number[] {

  if (arr.length <= 1) {
    return arr;
  }

  const mid: number = Math.floor(arr.length / 2);

  const left: number[]  = arr.slice(0, mid);
  const right: number[] = arr.slice(mid);

  return merge(
    mergeSort(left), // recursively sort
    mergeSort(right) // recursively sort
  );
}

function merge(left: number[], right: number[]): number[] {
  let arr: number[] = [];

  let i: number = 0; // for left side array indexes
  let j: number = 0; // for right side array indexes

  // compare left side and right side
  // then push into new arr in correct order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  // add remaining items from left array
  while (i < left.length) {
    arr.push(left[i]);
    i++;
  }

  // add remaining items from right array
  while (j < right.length) {
    arr.push(right[j]);
    j++;
  }

  return arr;
}
