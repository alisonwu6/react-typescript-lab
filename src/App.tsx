import React, { useState } from 'react';
import './App.css';

type BtnProps = {
  currentNum: number,
  onClickHandler: () => void
}

const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {
  return (
    <button onClick={ onClickHandler }>
      Plus 1,
      <span>Total: { currentNum }</span>
    </button>
  )
}

const App: React.FC = () => {
  const [num, setNum] = useState(0);
  const btnClickHandler = () => {
    setNum(num + 1);
  }

  return <>
    <h3>Counter: {num}</h3>
    <Btn currentNum={ num } onClickHandler={ btnClickHandler } />
  </>
}

export default App;
