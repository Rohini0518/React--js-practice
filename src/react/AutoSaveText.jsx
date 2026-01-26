// import { useEffect, useState } from "react";

function AutoSaveInput() {
  const [text, setText] = React.useState("");
  function saveText(e) {
    let savedValue=e.target.value
    setText(savedValue)
   const local= localStorage.setItem("autosave-text", savedValue)
const stored = localStorage.getItem("autosave-text");
console.log(stored, "from localStorage");  }
  function removeText() {
    setText("")
    localStorage.removeItem("autosave-text")
  }
  React.useEffect(() => {
    const getText = localStorage.getItem("autosave-text");
   setText(getText ||"")
   },[])
 
  return (
    <div>
      <h1>Auto Save Input</h1>
      <input type="text" value={text} style={{ padding: "6px" }} onChange={(e) => saveText(e) } />
      <p>text:{text}</p>

      <button style={{ padding: "8px 15px", margin: "10px", color: "white", borderRadius: "8px ", backgroundColor: "red" }} onClick={removeText}>Clear</button>
      
    </div>
  );
}

const container=document.getElementById("root")
const root=ReactDOM.createRoot(container)
root.render(<AutoSaveInput/>)