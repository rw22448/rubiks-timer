import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #FFFFFF;
  justify-content: center;
  padding: 8px 40px;
  margin: 4px;
  border-radius: 4px;
  border: none;
  background-color: #009EE2;
  outline: none;
  width: 120px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);;
  
  transition: background-color 0.25s;

  &:hover {
    background-color: #0090CE;
    text-decoration: underline;
  }

  &:active {
    background-color: #006590;
    text-decoration: underline;
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: none;
    transition-duration: 0s;
  }
`;

const Button = (props) => {
  return (
    <StyledButton onClick={props.click}>{props.status ? props.primaryText : props.secondaryText}</StyledButton>
  );
};

export default Button;