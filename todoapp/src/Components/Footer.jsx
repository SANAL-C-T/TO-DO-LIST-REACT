import React from "react";
import { useEffect, useState } from "react";
import "./Footer.css";
const foot = () => {
  const [ct, timeSet] = useState(0);
  const [inter, setintr] = useState(0);
  const [running, setrunning] = useState(false);
  const [resumer, setresumer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (!running) {
      setrunning(true);
      const id = setInterval(() => {
        timeSet((ct) => ct + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    timeSet(0);
    setrunning(false);
  };

  const pause = () => {
    timeSet(ct);
    clearInterval(intervalId);
    setIntervalId(null);
    setrunning(false);
  };


  const resume=()=>{
    if (!running) {
      setrunning(true);
      const id = setInterval(() => {
        timeSet((ct) => ct + 1);
      }, 1000);
      setIntervalId(id);
    }
  }
  return (
    <div id="foots">
      <br></br>

      <div>
        {/* <h1>timer:{ct}</h1>
        <button onClick={start}>START</button>
        <br></br>
        <br></br>
        <button onClick={reset}>RESET</button>
        <br></br>
        <br></br>
        <button onClick={pause}>PAUSE</button>
        <br></br>
        <br></br>
        <button onClick={resume}>RESUME</button> */}
      </div>
    </div>
  );
};

export default foot;
