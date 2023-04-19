import React, { useState } from 'react'

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
  const [accountVal, setAccountVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')

  function login() {
    // Begin (a possible way) ------
    // const account = document.getElementById('account') as HTMLInputElement
    // const password = document.getElementById('password') as HTMLInputElement
    // console.log('account', account.value)
    // console.log('password', password.value)
    // End (possible ways) ------

    console.log('accountVal', accountVal)
    console.log('passwordVal', passwordVal)
  }

  function onChangeAccountHandler(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget) {
      console.log('event.currentTarget.value', event.currentTarget.value)
      setAccountVal(event.currentTarget.value)
    }
  }

  function onChangePasswordHandler(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget) {
      console.log('event.currentTarget.value', event.currentTarget.value)
      setPasswordVal(event.currentTarget.value)
    }
  }

  return (
    <>
      <h1>Form</h1>
      <p>帳號</p>
      <input
        type='text'
        name=''
        value={accountVal} /*雙向綁定*/
        id='account'
        onChange={onChangeAccountHandler}
      />
      <p>你輸入的帳號{accountVal}</p>
      <p>密碼</p>
      <p>你輸入的密碼</p>
      <input
        type='text'
        name=''
        value={passwordVal}
        id='password'
        onChange={onChangePasswordHandler}
      />
      <div>
        <button onClick={login}>登入</button>
      </div>
    </>
  )
}

export default App
