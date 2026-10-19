// 2. Remove Duplicates (without Set)
// “Remove duplicates from this array. First do it without using Set, then tell me how you’d do it with Set.”
// javascript
// Input:  [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


//take new empty arr output=[] in function write we can do things in many ways first basic for loop and filter



//for loop

function removeDuplicates(arr){
    let output=[]

for (let i=0;i<arr.length;i++){
let ele=arr[i]
if ( !output.includes(ele)){
    output.push(ele)

}
}
return output
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

// 3. Predict the Output and Fix It
// “What will this print? Why? Now fix it so it prints 0, 1, 2.”
// javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//fix change var to let

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
