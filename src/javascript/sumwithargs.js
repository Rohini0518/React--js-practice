function sum(...args) {
  let total = 0;
  if (args.length == 0) return 0;

  let arr = args; //so arr=[1,2,3]

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      throw new TypeError("All arguments must be finite numbers");
    }

    total += arr[i];
  }

  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1.5, 2.5)); // 4
console.log(sum(-10, 5)); // -5
console.log(sum()); // 0

console.log(sum(1, "2", 3)); // Throws TypeError
console.log(sum(1, NaN)); // Throws TypeError
console.log(sum(Infinity, 2)); // Throws TypeError

// The time complexity is O(n) for n arguments, and the auxiliary space used by the summation itself is O(1),
//  excluding the array created by rest parameters.
// Why O(n)?
// - If there are 4 arguments, the loop runs 4 times.
// - If there are 100 arguments, the loop runs 100 times.
// - If there are 1,000 arguments, the loop runs 1,000 times.
// Here, n represents the number of arguments. As n increases, the number of iterations increases proportionally.

 // Therefore, the time complexity is O(n).