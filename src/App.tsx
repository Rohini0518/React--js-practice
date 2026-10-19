import "./App.css";
// import CopyClipboard from "./react/CopyClipboard";
import URLValidator from "./react/urlValidator2";
import ToDo from "./todoTypescript/ToDo";
// import AgeCalculator from "./react/AgeCalculator";
// import FormSubmit from "./react/FormSubmit";

function App() {
 console.log("app -file run")
  return (
    <>
      <h1>Vite + React+typescript</h1>
  {/* <FormSubmit/> */}
  {/* <AgeCalculator/> */}
  {/* <CopyClipboard/>
   */}
   {/* <URLValidator/> */}
   <ToDo/>
    </>
  );
}

export default App;
