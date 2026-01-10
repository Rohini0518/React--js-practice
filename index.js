let heading=document.createElement("h1")//document.create -creates a html real element-it will create elemnt in real DOM
// heading.className="title";
// heading.textContent="rohini rules"
//document.getElementById("app").appendChild(heading)
// console.log(heading)
// let rooth=document.getElementById("root")
// console.log(rooth)
console.log(React)
console.log(ReactDOM)

// react element is a light weight representation of dom element
const heading1=React.createElement("h1",{className:"react-title"},"created wit react")

console.log(heading)
console.dir(heading)//show as a object
console.log("react",heading1)
let container2=document.getElementById("root")
let root=ReactDOM.createRoot(container2)
console.log(root,"root-reactdom")
root.render(heading1)