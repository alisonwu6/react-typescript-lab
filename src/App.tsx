import React, { useEffect, useState } from 'react'

let interval: NodeJS.Timeout | null = null
let num = 0

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    interval = setInterval(() => {
      num++
      console.log(num)
    }, 1000)

    return () => {
      console.log('pre re-render')
      if (interval !== null) {
        clearInterval(interval)
        num = 0
      }
    }
  }, [counter])

  function clickHandler() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>
        Counter has been clicked: {counter} {counter <= 1 ? 'time' : 'times'}
      </h1>
      <p>check your console for more information</p>
      <button onClick={clickHandler}>Reset</button>
    </>
  )
}

export default App
