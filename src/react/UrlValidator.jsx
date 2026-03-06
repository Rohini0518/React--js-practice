import { useState } from "react";

function URLValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl(value) {
    const val = value.trim();
    if (val === "") {
      return false;
    }

    if (val.startsWith("http://") || val.startsWith("https://")) {
      const domain = val.replace("https://", "").replace("http://", "");

      if (
        !domain.includes(" ") &&
        (domain.includes(".") || domain.startsWith("localhost"))
      ) {
        return true;
      } else {
        return false;
      }
    } else {
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
      <h1>URL Validator</h1>

      <div className="container">
        <label htmlFor="url" style={{ margin: "10px" }}>
          Url:
        </label>

        <input
          id="url"
          name="url"
          type="text"
          placeholder="Enter Url to validate"
          value={input}
          onChange={handleChange}
          data-testid="url-input"
        />

        <p data-testid="result" style={{ color: isValid ? "green" : "red" }}>
          {isValid === null ? "" : isValid ? "Valid URL" : "Invalid URL"}
        </p>
      </div>
    </div>
  );
}

export default URLValidator;
