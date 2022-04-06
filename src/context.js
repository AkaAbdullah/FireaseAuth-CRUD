import React, { createContext, useState } from 'react'

export const userAuthState = createContext()
export const UserAuthStateProvider = (props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  return (
    <>
      <userAuthState.Provider value={{ userState: [isAuth, setIsAuth] }}>
        {props.children}
      </userAuthState.Provider>
    </>
  )
}
