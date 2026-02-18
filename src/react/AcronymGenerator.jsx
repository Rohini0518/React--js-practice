import { useState } from "react";

function AcronymGenerator() {

  const [inputText, setInputText] = useState("")
  const [result,setResult]=useState("")
  function toAcronym(text) {
    if(text==="") return setResult("")
    const newText = text.split(" ").map(p=>p.slice(0,1).toUpperCase())
   setResult(newText.join("").trim())
  }

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input type="text" data-testid="input" placeholder="Enter a phrase..." value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        <button data-testid="generate-button"  onClick={()=>toAcronym(inputText)}>Generate</button>
        <p data-testid="result" >Result : {result} </p>
      </div>
    </div>
  );
}
export default AcronymGenerator;