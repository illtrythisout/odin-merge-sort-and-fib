function mergeSort(arr) {
  // check if already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // split unsorted array in two
  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  // Recursively sort both halves and merge the sorted arrays
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let sorted = [];
  let [i, j] = [0, 0];

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
  return [...sorted, ...left.slice(i), ...right.slice(j)];
}
