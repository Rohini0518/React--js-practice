import "./App.css";
import AgeCalculator from "./react/AgeCalculator";
import FormSubmit from "./react/FormSubmit";

function App() {
 console.log("app -file run")
  return (
    <>
      <h1>Vite + React</h1>
  <FormSubmit/>
  <AgeCalculator/>
    </>
  );
}

export default App;
