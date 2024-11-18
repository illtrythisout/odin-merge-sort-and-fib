function mergeSort(arr) {
  // check if already sorted
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  // split unsorted array in two
  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);

  // Recursively sort both halves and merge the sorted arrays
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let sorted = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from `left` or `right`
  return sorted.concat(left.slice(i)).concat(right.slice(j));
}
