import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  // ＊ Mount => call data from api
  useEffect(() => {
    return () => {
      console.log('Hello useEffect')
    };
  }, []);
  // ---------------------------------------------------------------------------

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('Even');

  // ＊ ❌ too many re-renders. 
  // console.log('text', text)
  // setText("XXX")
  // ---------------------------------------------------------------------------

  useEffect(() => {
    console.log('useEffect -> setText')
    const currentText = counter % 2 === 0 ? 'Even' : 'Odd';
    setText(currentText)
  }, [counter]);

  const counterHandler = () => {
    setCounter(counter + 1)
  }

  return <>
    <h1>Counter: { counter }  <span>({ text })</span></h1>
    <button onClick={ counterHandler }>+1</button>
  </>
}

export default App;
