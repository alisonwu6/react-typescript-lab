import React, { useState } from 'react';

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
  const [counter, setCounter] = useState(0);

  function counterHandler() {
    // setCounter(counter + 1) // 前一次的 counter = 0
    // setCounter(counter + 1) // 依然是使用前一次的狀態 counter = 0
    function cb(prev: number) {
      return prev + 1;
    }
    setCounter(cb);
    setCounter(cb);
  }

  return <>
    <h1>Counter: { counter }</h1>
    <button onClick={ counterHandler }>Click me</button>
  </>
}

export default App;
