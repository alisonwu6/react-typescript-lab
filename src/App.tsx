import React, { useEffect, useState } from 'react';

/**
 * 1. Basic usage of useState
 */
// const App: React.FC = () => {
//   const [counter, setCounter] = useState(0);

//   function counterHandler() {
//     setCounter(counter + 1)
//   }

//   return <>
//     <h1>Counter: { counter }</h1>
//     <button onClick={ counterHandler }>+1</button>
//   </>
// }

// export default App;

/**
 * 2. batching update [https://overreacted.io/react-as-a-ui-runtime/#batching]
 */
// const Parent: React.FC = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <div onClick={ () => setCount(count + 1) }>
//       Parent clicked { count } times
//       <Child />
//     </div>
//   );
// }

// const Child: React.FC = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <button onClick={ () => setCount(count + 1) }>
//       Child clicked { count } times
//     </button>
//   );
// }

// export default Parent;

/**
 * 3. the render scope of state
 */
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
