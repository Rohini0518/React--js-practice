const { useState } = React;

function GuessTheNumber() {
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);
  const [guessed, setGuessed] = useState("");
  const [randomNum, setRandomNum] = useState(() => getRandom(1, 100));

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleGuess = () => {
    const userGuess = Number(guessed);

    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 100) {
      setFeedback("Please enter a number between 1 and 100.");
      return;
    }

    const nextCount = count + 1;
    setCount(nextCount);

    if (userGuess < randomNum) {
      setFeedback("Too low! Try again.");
      return;
    }

    if (userGuess > randomNum) {
      setFeedback("Too high! Try again.");
      return;
    }

    setFeedback(
      `Congratulations! You guessed the number in ${nextCount} attempts.`
    );
  };

  const resetGame = () => {
    setFeedback("");
    setCount(0);
    setGuessed("");
    setRandomNum(getRandom(1, 100));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>

      <input
        id="guess-input"
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        value={guessed}
        onChange={(e) => setGuessed(e.target.value)}
      />

      <button onClick={handleGuess}>Check Guess</button>
      <button onClick={resetGame}>Reset Game</button>

      <p style={{ fontWeight: "bold" }}>{feedback}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GuessTheNumber />);
