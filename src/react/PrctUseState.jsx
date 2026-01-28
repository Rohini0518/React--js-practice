import { useState } from "react";

//   let count = 0;// without storing it on top of function always when tha app render it will become zero only

export default function PrctUseState() {
  //   console.log(typeof useState);

  // 1) without using state -have to add render in button for everystate where we need to keep UI Update.

  /* i can see this in console browser-So you see two outputs:
  1)yours → App.tsx 2)DevTools → installHook.js-It belongs to React DevTools */

  /*  console.log(count);
  function increment() {
    console.log("in fn before", count);
    count++; 
  renderApp() // this is updating in memory but not updating in UI i.e this component is not rendering after chnage again, no diffing
    console.log("in fn after", count);
  } */

  // 2)with useState just primitive data
  const [counter, setCounter] = useState(0);
  const [rho, setRho] = useState(55);
  const [objState, setObjState] = useState({ uName: "rho", uNum: 2 });
  const [arrState, setArrState] = useState([2, 4, 5, 6]);
      console.log("checkin asyncstate")

  const [checkAsync,setCheckAsync]=useState(44)
      console.log("checkin asyncstate",checkAsync)

  console.log(" very beggining", counter, rho, objState);

  function incrementPrimitiveState() {
    console.log("before from state  -", counter);
    setCounter(counter + 1);
    // react will not rerender now if the any chnage in node then only it will rerender
    // counter++ // this works same as normal js varubale without using setstate
    console.log(" from state after state update-", counter);
  }

  console.log(" just after inc fn before return", counter);

  function objStateFn() {
    console.log("in fn before setstate", objState);
    setObjState({ ...objState, uNum: objState.uNum + 2 });
    console.log("in fn after setstate", objState);
  }

  function arrStateFn() {
    console.log("arrState before set", arrState);
    setArrState([...arrState, counter]);
  }

  function checkasyncState(){
    console.log("checkin async fn")
    //initial=44
  setCheckAsync(checkAsync+1)//45
  setCheckAsync((p)=>p+5)//44+2=46--
  setCheckAsync(checkAsync+3)//44+3=47
  //   setCheckAsync((p)=>p-6)//47-6=38--

  }
  return (
    <>
      <h1> React</h1>
      {/* <p>Count:{count}</p> */}
      {/* <button onClick={increment}>Increment Count</button> */}
      <div>
        <p>Counter:{counter} </p>
        <button onClick={incrementPrimitiveState}>Increment Count</button>
        <p>num:{rho} </p>
        <button
          onClick={() => setRho(rho + 2)}
          style={{ margin: "10px", backgroundColor: "lightblue" }}
        >
          rohini
        </button>
      </div>

      <div>
        <p>objNum:{objState.uNum}</p>
        <button onClick={objStateFn}>objState</button>
      </div>
      <div>
        <p>objNum:{arrState}</p>
        <button onClick={arrStateFn}>arrState</button>
      </div>
      <div>
         <p>check Async State:{checkAsync}</p>
        <button onClick={checkasyncState}>checkAsync working of state</button>
      </div>
    </>
  );
}
