import { Component } from "react";

export function LifeCycleMethds() {
  return (
    <>
      <div>Functional Components</div>
    </>
  );
}
console.log("rohini setted deugger")

export class LifeMClass extends Component {
  constructor(props){
        super(props)
        // this.props={count:10}
    }

  render() {
    return (
      <div style={{border:"2px solid black",margin:"25px"}}>
        <p>class component</p>
        <p>{this.props.count}</p>
      </div>
    );
  }
}
