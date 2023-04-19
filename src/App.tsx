import React, { useRef, useEffect } from 'react'

// Begin (original way of getting HTML element) ------
// const App: React.FC = () => {
//   const element = document.getElementById('h1')
//   console.log('element', element)

//   useEffect(() => {
//     const element = document.getElementById('h1')
//     console.log('useEffect element:', element)
//   }, [])
//   return (
//     <>
//       <h1 id='h1'>Ref</h1>
//     </>
//   )
// }
// End (original way of getting HTML element) ------


// Begin (use Ref to get HTML element) ------
const App: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    console.log('h1Ref.current', h1Ref.current)
  }, [])
  return (
    <>
      <h1 ref={h1Ref}>Ref</h1>
    </>
  )
}
// End (use Ref to get HTML element) ------

export default App

/** Procedure of Creating React Components
 * 1. create a component
 * 2. return jsx
 * 3. run callback of useEffect
 */
