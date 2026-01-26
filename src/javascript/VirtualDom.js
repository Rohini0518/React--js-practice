//h1-real dom 

//input form-placeholder-entername
//button-update time
//p-presentime
let vcontainer=document.getElementById("vdom")

let root=ReactDOM.createRoot(vcontainer)
function virtualDom(){

let heading=React.createElement("h1",null,"Virtual React DOM")
let input=React.createElement("input",{placeholder:"Enter Name"})
let button=React.createElement("button",{onClick:virtualDom},"Update Time")
let time=React.createElement("p",null,new Date().toLocaleString())

root.render([heading,input,button,time])
}
virtualDom()