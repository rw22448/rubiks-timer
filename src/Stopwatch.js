import React, { useState, useRef, useEffect } from 'react';

const Stopwatch = () => {
  const [status, setStatus] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  let timer = useRef(null);

  const handleClick = () => {
    if (status) {
      clearInterval(timer.current);
    } else {
      const startTime = Date.now() - runningTime;
      timer.current = setInterval(() => {
        setRunningTime(Date.now() - startTime);
      });
    }

    setStatus(!status);
  };

  const handleReset = () => {
    clearInterval(timer.current);
    setStatus(false);
    setRunningTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer.current)
    };
  }, []);

  return (
    <div>
      <p>{runningTime}ms</p>
      <button onClick={handleClick}>{status ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;