import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { auth, provider } from '../Firebase-confog'
import { signInWithPopup } from 'firebase/auth'
import { userAuthState } from '../context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  const { userState } = useContext(userAuthState)
  const [isAuth, setIsAuth] = userState

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div className='container'>
      <div className='innerdiv'>
        <div className='loginCard'>
          <div className='card-items'>
            <h3>Signup With Google</h3>
            <div className='authdiv'>
              <img
                src={logo}
                style={{ width: '50px', height: '50px' }}
                alt='logo'
              ></img>
              <button className='googlebtn' onClick={signInWithGoogle}>
                Signin with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
