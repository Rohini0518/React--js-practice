import { useState } from "react";

function URLValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl(value) {
    try {
      if (!value || /\s/.test(value)) return false;

      if (!value.includes("://")) return false;

      const url = new URL(value);

      const isHTTP = url.protocol === "http:" || url.protocol === "https:";

      const hasValidHost =
        url.hostname === "localhost" || /\w+\.\w+/.test(url.hostname);

      return isHTTP && hasValidHost;
    } catch (error) {
      return false;
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    setIsValid(validateUrl(value));
  }

  return (
    <div>
      {" "}
      <h1>URL Validator</h1>
      <div className="container">
        <input
          type="text"
          value={input}
          placeholder="Enter a URL"
          onChange={handleChange}
          data-testid="url-input"
        />

        {isValid !== null && (
          <p style={{ color: isValid ? "green" : "red" }} data-testid="result">
            {isValid ? "Valid URL" : "Invalid URL"}
          </p>
        )}
      </div>
    </div>
  );
}

export default URLValidator;
