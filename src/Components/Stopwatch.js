import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Timer from './Timer';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
      <h1>rubiks timer</h1>
      <Timer time={runningTime}/>
      <StyledButtonGroup>
        <Button click={handleClick} primaryText='Start' status={!runningStatus} secondaryText='Stop' />
        <Button click={handleReset} primaryText='Reset' status={true} secondaryText={null} />
      </StyledButtonGroup>
    </div>
  );
};

export default Stopwatch;