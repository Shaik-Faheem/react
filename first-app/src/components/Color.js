import React, { useState } from "react";

export default function Color() {
  const [mystyle, setMystyle] = useState({
    Color: "black",
    backgroundcolor: "white",
    border: "2px solid black",
  });
  const changecolor = () => {
    if(mystyle.Color==='black'){
    setMystyle(
      {
      color: "white",
      backgroundColor: "black",
      border: "2px solid white",
    }
  )
   setbtntext('light mode')
  }
  else{
    setMystyle(
      {
        Color: "black",
    backgroundcolor: "white",
    border: "2px solid black",
      }
    )
    setbtntext('dark mode')
  }
  };
  const [btntext,setbtntext]=useState('dark mode')
  return (
    <>
      <div style={mystyle} id="card">
        <p>This is Faheem</p>
        <button onClick={changecolor} style={mystyle}>{btntext}</button>
      </div>
    </>
  );
}
