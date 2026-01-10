// import { useEffect, useState } from "react";

function AutoSaveInput() {
  const [text, setText] = React.useState("");
  function saveText(e) {
    setText(e.target.value)
   const local= localStorage.setItem("savedText", text)
    console.log(local,"local storage text")
  }
  function removeText() {
    setText("")
    localStorage.setItem("savedText", "")
  }
  React.useEffect(() => {
    const getText = localStorage.getItem("savedText");
   setText(getText)
   },[])
 
  return (
    <div>
      <h1>Auto Save Input</h1>
      <input type="text" value={text} style={{ padding: "6px" }} onChange={(e) => saveText(e) } />
      <p>text:{text}</p>
      
      <button style={{ padding: "8px 15px", margin: "10px", color: "white", borderRadius: "8px ", backgroundColor: "green" }} onClick={() => setText("")}>Clear</button>
      
      <button style={{ padding: "8px 15px", margin: "10px", color: "white", borderRadius: "8px ", backgroundColor: "red" }} onClick={removeText}>Remove</button>

      
    </div>
  );
}

const container=document.getElementById("root")
const root=ReactDOM.createRoot(container)
root.render(<AutoSaveInput/>)