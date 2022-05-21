import { useRef, useState, useEffect } from "react";
import styles from "./Timer.module.css";


const Timer = ({ initial}) => {

  const [num, setNum] = useState(initial);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [timer, setTimer] = useState(true);
  const value = useRef(null);

  function startInterval() {
    setTimer(false);
    value.current = setInterval(() => {
      setNum((p) => p + 1);
    }, 1000);
  }

  const reset = () => {
    setTimer(true);
    clearInterval(value.current);
    setNum(0);
    setMinute(0)
    setHour(0);
  };

  const stop = () => {
    clearInterval(value.current);
    setTimer(true);
  };

  useEffect(() => {
    if (num > 59.0) {
      setNum(0);
      setMinute((p) => p + 1);
    }
    if (minute > 59.0) {
      setMinute(0);
      setNum(0);
      setHour((p) => p + 1);
    }
  }, [num, minute]);

  return (

    <div className={styles.main_container}>
      <div className={styles.inner_div}>
      <p> <img src="https://iconape.com/wp-content/files/ee/64781/svg/google-2015.svg" alt="" />
           
          <h2>Timer</h2> </p>
      </div>
   
      
        <div className="asd">
          <h1>{hour}h</h1>
          <h1>:</h1>
          <h1>{minute}m</h1>
          <h1>:</h1>
          <h1>{num}s</h1>
        </div>

      <div className="btn_container">
        
      {timer ? (
        <button onClick={startInterval}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}

      <button onClick={reset}>Reset</button>
      </div>
     
    </div>
  );
};

export default Timer;