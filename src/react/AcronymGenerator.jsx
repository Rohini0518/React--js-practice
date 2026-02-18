import { useState } from "react";

function AcronymGenerator() {

  
  function toAcronym(text) {
    // Implement acronym logic here
  }

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input type="text" placeholder="Enter a phrase..." />
        <button>Generate</button>
        <p>Result : </p>
      </div>
    </div>
  );
}
export default AcronymGenerator;