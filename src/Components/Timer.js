import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.p`
  font-size: 92px;
  margin: 0px 0px 18px -2px;
  font-family: 'Rubik', sans-serif;
`;

const DIGITS_OF_LARGE_NUMBER = 6;
const DECIMAL_POINT = {
  ONE: 1,
  TWO: 2,
};

const Timer = (props) => {
  let timeLength = props.time.toString().length;

  return (
    <StyledTimer>{(props.time/ 1000).toFixed(timeLength > DIGITS_OF_LARGE_NUMBER ? DECIMAL_POINT.ONE : DECIMAL_POINT.TWO)}</StyledTimer>
  );
};;

export default Timer;