// 2. Нахождение самого частого элемента (feature/most-frequent)

// const myArr = [1, 2, 2, 3, 3, 3, 3, 4, 2,2,3];
// alert(mostFrequent(myArr));

function mostFrequent(arr) {
  arr.sort();
  let result;
  let count=0;
  let maxCount = count;
  let current;
  arr.forEach((e) => {
    if (current === e) {
      count++;
    }
    else {
      if (count > maxCount) {
        maxCount = count;
        result = current;
      }
      current = e;
      count = 1;
    }
  });
  if (count > maxCount) {
    maxCount = count;
    result = current;
  }
  return result;
}
