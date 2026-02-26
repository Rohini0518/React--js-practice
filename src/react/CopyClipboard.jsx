import { useState } from "react";

function CopyClipboard() {

  

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
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
