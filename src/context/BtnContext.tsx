import React, { createContext, useState, useContext } from 'react'

type BtnProps = {
  children: React.ReactNode,
}

const defaultValue = {
  btnVisible: false,
}

const BtnContext = createContext(defaultValue)

// 設定值得時候調用他
export const BtnProvider: React.FC<BtnProps> = ({ children }) => {
  const [btnVisible, setBtnVisible] = useState(true)

  return (
    <>
      <BtnContext.Provider value={{ btnVisible }}>
        {children}
      </BtnContext.Provider>
    </>
  )
}

// 取值得時候調用他
export const useBtnContext = () => {
  return useContext(BtnContext)
}
