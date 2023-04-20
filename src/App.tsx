import React, { useState, useEffect, useMemo, useCallback, memo } from 'react'

type PropsB = {
  num: number
  obj: { name: string }
}

/**
 * 'memo' is used to wrap a functional component
 * and only re-render it if the props have changed.
 */
const B: React.FC<PropsB> = memo(({ num, obj }) => {
  console.log('Render B', num)
  return (
    <>
      <h2>B Component</h2>
      <p>Number: {num}</p>
      <p>Name: {obj.name}</p>
    </>
  )
})

const App: React.FC = () => {
  console.log('Render App')
  const [value, setValue] = useState(false)
  const [num, setNum] = useState(0)

  const [obj, setObj] = useState({ name: '' })
  const memoObj = useMemo(() => {
    return obj
  }, [obj.name])

  return (
    <>
      <h1>Hooks</h1>
      <B
        num={num}
        obj={memoObj}
      />
      <button
        onClick={() => {
          setValue(!value)
        }}
      >
        Re-render
      </button>
      <button
        onClick={() => {
          setNum(100)
        }}
      >
        Set Number
      </button>
      <button
        onClick={() => {
          setObj({ name: 'Joe' })
        }}
      >
        Set Name
      </button>
    </>
  )
}

export default App
