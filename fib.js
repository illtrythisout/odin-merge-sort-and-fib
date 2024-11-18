function fib(n) {
  let arr = [0, 1];
  let [a, b] = arr;
  let c;
  for (let i = 0; i < n - 2; i++) {
    c = a + b;
    a = b;
    b = c;
    arr.push(c);
  }
  return arr;
}

function fibRec(n, arr = [0, 1]) {
  if (arr.length === n) {
    return arr;
  }
  let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(nextNum);
  return fibRec(n, arr);
}
