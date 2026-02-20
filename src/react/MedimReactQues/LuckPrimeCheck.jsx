import { useEffect, useState } from 'react';
import "./LuckyNumber.css";


function LuckyNumber() {
  const [num, setNum] = useState("")
  const [result,setResult]=useState("")
  function checkPrimeNum(num) {
    if (num === "") return "";
  const total = num.toString().split('').reduce((acc, sum) => acc + Number(sum), 0);
  if (total < 2) return "Not a Lucky Number";
  if (total == 2) return "Lucky Number";
  for (let i = 2; i <= Math.sqrt(total); i++) {
    if (total % i === 0) return "Not a Lucky Number";
  }
    
return "Lucky Number"

  }

  useEffect(() => {
    setResult(checkPrimeNum(num));
  }, [num]); 

  return (
    <div>
      <h1>Lucky Number</h1>
      <p>A number is Lucky if the sum of its digits is a Prime Number </p>

      <div className="container">
        {/* Add Input and Result */}
        <input data-testid="input-box" className="input-box" type="number" value={num} placeholder="Enter a Number" onChange={(e) =>setNum(e.target.value)} />
        <p data-testid="result" className="result"  >{result}</p>
      </div>
    </div>
  );
}

export default LuckyNumber;