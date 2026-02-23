import React, { useState } from "react";
import "../css/AgeCalculator.css";

function AgeCalculator() {
const [inputDate,setInputDate]=useState("")
    function PresentDate(){
        const present=new Date()
        const selectedDate=new Date(inputDate)
        const year=present.getFullYear()
        const month=present.getMonth()+1
        const day=present.getDay()
        console.log(day,month,year)
        console.log(typeof month,typeof year,typeof day)
        console.log(selectedDate,"inputdate ")
    }
      PresentDate();

    //   console.log(inputDate,"input date")
  return (
    <div className="conatiner">
      <h2 className="title"></h2>
      <label className="label"></label>
      <input id="birthdate" type="date" className="input-date"  value={inputDate} onChange={(e)=>setInputDate(e.target.value)}/>
      <button className="btn-calc">Calculate Age</button>
      <p className="error-msg"></p>
      <p className="age-result">1 years, 4 months, 2 days</p>
    </div>
  );
}

export default AgeCalculator;
