import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Library Circulation System</h1>
        <input
        type="txt"
        placeholder='Username'/>
        <input
        type="txt"
        placeholder='Password'/>
        <button color='blue'>Login</button>
      <section id="spacer"></section>
      </section>
    </>
  )
}

export default LoginPage
