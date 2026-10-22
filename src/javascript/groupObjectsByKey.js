//  Group Objects by a Key
// “You have a list of employees from an API. Group them by department.”
// javascript
// Input:
let arr1=[
  { name: "Ravi", dept: "HR" },
  { name: "Sita", dept: "IT" },
  { name: "Arun", dept: "HR" }
]

// Output:
// { HR: ["Ravi", "Arun"], IT: ["Sita"] }

let output=arr1.reduce((acc,ele)=>{
    let key=ele.dept;
    if(!acc[key]) acc[key]=[]
    acc[key].push(ele.name);
    return acc;

},{})

console.log(output)