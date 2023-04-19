import React, { useState, useRef } from 'react'
// useRef -> let you maintain the same reference across renders.

const App: React.FC = () => {
  const [hidden, setHidden] = useState(false)
  const sumRef = useRef(0);

  // let sum = 0
  console.log('-----[Render]', sumRef.current)

  function click() {
    sumRef.current = sumRef.current + 1
    console.log('[Click] sumRef.current:', sumRef.current)

    if (sumRef.current === 5) {
      setHidden(true)
    } else if (sumRef.current > 15) {
      setHidden(false)
    }
  }
  return (
    <>
      <h1>Ref</h1>
      <button onClick={click}>+1</button>
      {hidden && <div>The hidden area</div>}
    </>
  )
}

export default App
