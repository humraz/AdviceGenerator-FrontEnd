import React, { useEffect, useState } from "react";
import "../css/styles.css";
import dice from "../assets/icon-dice.svg";
import divider from "../assets/pattern-divider-desktop.svg";

export default function Advice() {
  const [advice, setadvice] = useState("");
  const [advicenumber, setadvicenumber] = useState("");

  async function getadvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    setadvice(data["slip"]["advice"]);
    setadvicenumber(data["slip"]["id"]);
  }
  function handleclick() {
    getadvice();
  }

  useEffect(()=>{
    
  },[advice])

  return (
    <div className="screen">
      <div className="maincard">
        <div className="contentmain">
          <div className="heading">
            <p>{advicenumber && `ADVICE #${advicenumber}`}</p>
          </div>
          <div className="advicetext">
            <p>
              {advice
                ? `"${advice}"`
                : "Click to generate your daily dose of advice"}
            </p>
          </div>
          <div className="divider">
            <img src={divider}></img>
          </div>
          <div className="btncontainer">
            <div className="buttondice">
              <img onClick={() => handleclick()} src={dice}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
