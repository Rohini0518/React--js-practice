import { useState } from "react";

function URLValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl() {
    e.preventDefault();
    if (input.trim() === "") { setIsValid(false); return; } 

    if (input.startsWith("https://") || input.startsWith("http://")) {
      const domain = input.replace("http://", "").replace("https://", "")
      if (!domain.includes(" ") && (domain.includes(".") || domain.startsWith("localhost")) ) {
      setIsValid(true)
      }
     else {
  setIsValid(false)
}
   }

    else {
  setIsValid(false)
}


  }

  return (
    <div>
      <h1>URL Validator</h1>

      <form className="container" onSubmit={validateUrl}>
        <label htmlFor="url" style={{ margin: "10px" }}>Url:</label>

        <input
          id="url"
          name="url"
          type="text"
          placeholder="Enter Url to validate"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          data-testid="url-input"
        />

        <button
          type="submit"
          style={{ margin: "10px", backgroundColor: "lightblue" }}
        >
          Validate
        </button>

        <p
          data-testid="result"
          style={{ color: isValid ? "green" : "red" }}
        >
          {isValid === null ? "" : isValid ? "Valid URL" : "Invalid URL"}
        </p>
      </form>
    </div>
  );
}
export default URLValidator;
