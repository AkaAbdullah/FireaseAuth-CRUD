import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { UserAuthStateProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <UserAuthStateProvider>
      <App />
    </UserAuthStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
