import React, { useState } from "react";
import "./styles.css";

export default function LeapYear() {
  const [year, setYear] = useState("")
  const [result, setResult] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  
  function checkLeapYear() {
    if (year.trim() == "") {
      setErrorMsg("Please enter a year")
      setResult("")
      return
    }
    let yearVal = Number(year.trim()) 
    if (yearVal) {
      setErrorMsg("")
}

    if (yearVal % 400 == 0 || (yearVal % 4 === 0 && yearVal % 100 !== 0)) {
      setResult(`${year} is a Leap Year`)
    }
    else {
      setResult(`${year} is  not a Leap Year`)

     }
      
  }

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        value={year}
        onChange={(e)=>setYear(e.target.value)}
      />

      <button data-testid="check-btn" onClick={checkLeapYear}>
        Check
      </button>
      <p data-testid="result">{result}</p>
      {errorMsg && (
        <div data-testid="error-msg">{errorMsg}</div>
      )}    </div>
  );
}
