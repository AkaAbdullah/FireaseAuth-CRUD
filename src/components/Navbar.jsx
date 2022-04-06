import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userAuthState } from '../context'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase-confog'

const Navbar = () => {
  const { userState } = useContext(userAuthState)
  const [isAuth, setIsAuth] = userState
  console.log('fromnavbar', isAuth)

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <h1>ZATI</h1>
        </div>
        <div className='menu_items'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>

            {isAuth ? (
              <>
                <li>
                  <NavLink to='/createpost'>Create Post</NavLink>
                </li>
                <button className='signout' onClick={signOutUser}>
                  Signout
                </button>
              </>
            ) : (
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
