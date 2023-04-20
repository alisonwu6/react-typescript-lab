import React, { useState, useEffect, useMemo, useCallback } from 'react'

const App: React.FC = () => {
  console.log('Render')

  const [value, setValue] = useState(false)
  // const aa = 1000

  /**
   * The 'obj' object makes the dependencies of useEffect Hook change on every render.
   * => useMemo to memoize values.
   * => useCallback to memoize a function.
   */
  // const obj = { name: 'Joe', data: { gender: 'male', age: 30 } }

  // useMemo (object, array, function)
  const memoObj = useMemo(() => {
    const obj = { name: 'Joe', data: { gender: 'female', age: 30 } }
    return obj
  }, [])

  // const memoFunc1 = useMemo(() => {
  //   return () => {}
  // }, [])

  // const memoFunc2 = useCallback(() => {
  //   console.log('here')
  // }, [])

  // Shallow Compare
  useEffect(() => {
    console.log('useEffect')
  }, [memoObj])

  return (
    <>
      <h1>Hooks</h1>
      <button
        onClick={() => {
          setValue(!value)
        }}
      >
        Re-render
      </button>
    </>
  )
}

export default App
