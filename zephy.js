function mediane(tab1, tab2) {
  let tabAddition = tab1.concat(tab2);
  console.log(tabAddition.length);

  if (tabAddition.length % 2 == 0) {
    console.log(
      (tabAddition[tabAddition.length / 2] +
        tabAddition[tabAddition.length / 2 - 1]) /
        2
    );
  } else {
    console.log(tabAddition[tabAddition.length / 2 - 0.5]);
    // return concat[(tabAddition.length / 2) - .5]
  }
  console.log(tabAddition);
}
mediane([1, 8], [7]);

// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in ascending order
// points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points);
