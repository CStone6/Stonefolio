import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/icon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'>
      <h1>welcome to my portfolio</h1>
    </div>
      <div>
        <a href="https://github.com/CStone6" target="_blank">
          <img src={viteLogo} className="icon" alt="Vite logo" />
        </a>
      </div>
      <h1>CStone</h1>

      <hr className='line'></hr>

      <h1>languages i know</h1>

      <div className='row'>
        <div className='columnpy'><h1>Python</h1></div>
        <div className='columnjar'><h1>Java</h1></div>
        <div className='columnhtml'><h1>Web</h1></div>
      </div>
    </>
  )
}



export default App
