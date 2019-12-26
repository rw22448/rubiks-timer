import React from 'react';
import Stopwatch from './Components/Stopwatch';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 12px;
  margin: 6px;
  width: 300px;
  border: 2px solid #171D1C;
  border-radius: 8px;
`;

function App() {
  return (
    <StyledMain>
      <Stopwatch />
    </StyledMain>
  );
}

export default App;
