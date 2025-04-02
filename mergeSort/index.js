export function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const l = [...left];
  const r = [...right];
  const sorted = [];

  while (l.length > 0 && r.length > 0) {
    if (l[0] < r[0]) {
      sorted.push(l.shift());
    } else {
      sorted.push(r.shift());
    }
  }

  while (l.length > 0) {
    sorted.push(l.shift());
  }

  while (r.length > 0) {
    sorted.push(r.shift());
  }
  return sorted;
}
