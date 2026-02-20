import { useEffect, useState } from 'react';
import "./Slugify.css";

function Slugify() {
  const [inputTxt, setInputTxt] = useState("")
  function slugifyString(str) {
    // Write logic to slugify string
    const text = str.trim()
    if (text === "") return "";
    const newT = text.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase().split(" ").join("-")
    return newT;
  }

  const result = slugifyString(inputTxt)

  return (
    <div>
      <h1>Slugify a String</h1>

      <div className="container">
        {/* Add Input and Result */}
        <input type="text" className="input-box" data-testid="input-box" value={inputTxt} onChange={(e) => setInputTxt
          (e.target.value)} placeholder="Enter here" />
        <p className="result" data-testid="result" >{result}</p>
      </div>
    </div>
  );
}
export default Slugify;
