import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.status ? props.primaryText : props.secondaryText}</button>
  );
};

export default Button;