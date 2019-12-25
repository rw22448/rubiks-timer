import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

const Stopwatch = () => {
  const [runningStatus, setRunningStatus] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  let timer = useRef(null);

  const handleClick = () => {
    if (runningStatus) {
      clearInterval(timer.current);
    } else {
      const startTime = Date.now() - runningTime;
      timer.current = setInterval(() => {
        setRunningTime(Date.now() - startTime);
      });
    }

    setRunningStatus(!runningStatus);
  };

  const handleReset = () => {
    clearInterval(timer.current);
    setRunningStatus(false);
    setRunningTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer.current)
    };
  }, []);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{runningTime}ms</p>
      <Button click={handleClick} primaryText='Start' status={!runningStatus} secondaryText='Stop' />
      <Button click={handleReset} primaryText='Reset' status={true} secondaryText={null} />
    </div>
  );
};

export default Stopwatch;