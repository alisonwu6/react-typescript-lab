import React from 'react';
import styled from 'styled-components';

type BtnType = {
  colorStatus: boolean
}

const Button = styled.button<BtnType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.colorStatus === false ? 'grey' : 'seagreen'};
  color: #000;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const H1 = styled.h1`
  color: blue;
`

const App: React.FC = () => {
  return <>
    <H1>Hello</H1>
    <Button colorStatus={false}>Submit</Button>
  </>
}

export default App;
