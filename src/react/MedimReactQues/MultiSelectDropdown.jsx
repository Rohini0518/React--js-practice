import  { useState, useRef, useEffect } from 'react';
import "./styles.css";

function MultiSelectDropdown() {
  const options = [
    { id: 1, option: "Option 1" },
    { id: 2, option: "Option 2" },
    { id: 3, option: "Option 3" },
    { id: 4, option: "Option 4" },
    { id: 5, option: "Option 5" },
    { id: 6, option: "Option 6" },
    { id: 7, option: "Option 7" },
    { id: 8, option: "Option 8" },
    { id: 9, option: "Option 9" },
    { id: 10, option: "Option 10" }
  ]

  const [selectedOptions, setSelectedOptions] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState("")
  const [error, setError] = useState("")
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsClicked(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  function handleCheckbox(id) {
    setSelectedOptions((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
    setShowResult(false)
    setError("")
  }

  function handleReset() {
    setSelectedOptions([])
    setShowResult(false)
    setResult("")
    setError("")
  }

  function handleResult() {
    if (selectedOptions.length === 0) {
      setError("Please select at least one option.")
      setShowResult(false)
      return
    }
    setError("")
    setShowResult(true)
    const resultdata = selectedOptions
      .map(id => options.find(o => o.id === id).option)
      .join(", ")
    setResult(resultdata)
  }

  return (
    <div className="dropdown-container">
      <h2 className="dropdown-title">Multiselect Dropdown Menu</h2>
      <label className="dropdown-label" data-testid="label">Select Options:</label>
      <div className="dropdown-wrapper" ref={dropdownRef}>
        <button
          className="dropdown-toggle"
          data-testid="dropdown-button"
          onClick={() => setIsClicked(p => !p)}
        >
          <span
            className={`dropdown-icon ${isClicked ? "rotate" : ""}`}
            data-testid="dropdown-icon"
          >
            {isClicked ? "⮝" : "⮟"}
          </span>
          <span className="dropdown-button-label">
            {selectedOptions.length === 0 ? "Choose Options" : `${selectedOptions.length} selected`}
          </span>
        </button>

        {isClicked && (
          <ul className="dropdown-menu" data-testid="dropdown-menu">
            <li
              className="dropdown-reset"
              data-testid="reset-button"
              onClick={handleReset}
            >
              Reset Selection
            </li>
            {options.map(ele => (
              <li
                className="dropdown-option"
                data-testid={`option-${ele.option}`}
                key={ele.id}
                onClick={() => handleCheckbox(ele.id)}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(ele.id)}
                  onChange={() => handleCheckbox(ele.id)}
                />
                <span className="option-label">{ele.option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="submit-button"
        data-testid="submit-button"
        onClick={handleResult}
      >
        Submit
      </button>

      {error && (
        <div className="error-message" data-testid="error-message">{error}</div>
      )}

      {showResult && (
        <div className="result-area" data-testid="selected-options">
          <strong>Selected:</strong> {result}
        </div>
      )}
    </div>
  )
}

export default MultiSelectDropdown;
