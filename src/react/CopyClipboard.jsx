import { useState } from "react";

function CopyClipboard() {
  const [result, setResult] = useState("")
  const [text, setText] = useState("")

  function handleCopy(value) {
    if (!value.trim()) {
      setResult("Type some values to copy");
    } else {
      navigator.clipboard.writeText(value);
      setResult("Copied!");

      setTimeout(() => {
        setResult("");
      }, 2000);
    }
  }

 
  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(text);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
          {result === "Copied!" && (
            <p data-testid="copied-message">{result}</p>
          )}

          {result !== "Copied!" && result && (
            <p data-testid="error-message">{result}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
