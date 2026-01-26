//h1-real dom 
//input form-placeholder-entername
//button-update time
//p-presentime

let container=document.getElementById("ogdom");

function createOgDom(){
let heading=document.createElement("h1");
heading.innerText="Real DOM"
let input=document.createElement("input")
input.placeholder="Enter Name here"
input.name="form"
let button=document.createElement("button")
button.innerText="Update Time"
button.title="Click to get Latest Time"
button.addEventListener("click",createOgDom)
let time=document.createElement("p")
time.innerText=new Date().toLocaleString()
 container.innerHTML=" ";
container.append(heading,input,button,time)
}

createOgDom()
