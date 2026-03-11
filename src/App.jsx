import { useState, useEffect } from 'react'
import python from './assets/python.png'
import java from './assets/java.png'
import html from './assets/html.png'
import viteLogo from './assets/icon.png'
import './App.css'
import useMousePosition from './hooks/Mouse.jsx';
import getCenter from './hooks/getCenter.js';


// todo add smothing to icon, add real info




function App() {
  const mousePosition = useMousePosition();
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // mouse math for python panel 

    const python = document.querySelector('.columnpy')
    const pyrect = python.getBoundingClientRect();
    const {CenterXpy, CenterYpy} = getCenter(pyrect.x,pyrect.y,pyrect.width,pyrect.height)

    let pyx = ((CenterXpy - mousePosition.x) / pyrect.width) / 5;
    let pyy = ((CenterYpy - mousePosition.y) / pyrect.height) / 5;

    pyx = Math.max(-.06, Math.min(.06, pyx))
    pyy = Math.max(-.06, Math.min(.06, pyy))

    if ( Math.abs(CenterYpy - mousePosition.y) > 300){
      pyx = 0
      pyy = 0
    }


    document.documentElement.style.setProperty('--MouseYpy', pyx * -1 + 'turn')
    document.documentElement.style.setProperty('--MouseXpy', pyy + 'turn')

    // mouse math for java panel 

    const java = document.querySelector('.columnjar')
    const javarect = java.getBoundingClientRect();
    const {CenterXjar, CenterYjar} = getCenter(javarect.x,javarect.y,javarect.width,javarect.height)

    let jarx = ((CenterXjar - mousePosition.x) / javarect.width) / 5 ;
    let jary = ((CenterYjar - mousePosition.y) / javarect.height) / 5;

    jarx = Math.max(-.06, Math.min(.06, jarx))
    jary = Math.max(-.06, Math.min(.06, jary))

    if ( Math.abs(CenterYjar - mousePosition.y) > 300){
      jarx = 0
      jary = 0
    }

    document.documentElement.style.setProperty('--MouseYjar', jarx * -1 + 'turn')
    document.documentElement.style.setProperty('--MouseXjar', jary + 'turn')

        // mouse math for java panel 

    const html = document.querySelector('.columnhtml')
    const hrmlrect = html.getBoundingClientRect();
    const {CenterXhtml, CenterYhtml} = getCenter(hrmlrect.x,hrmlrect.y,hrmlrect.width,hrmlrect.height)

    let htmlx = ((CenterXhtml - mousePosition.x) / hrmlrect.width) / 5 ;
    let htmly = ((CenterYhtml - mousePosition.y) / hrmlrect.height) / 5;

    htmlx = Math.max(-.06, Math.min(.06, htmlx))
    htmly = Math.max(-.06, Math.min(.06, htmly))

    if (Math.abs(CenterYhtml - mousePosition.y) > 300){
      htmlx = 0
      htmly = 0
    }

    document.documentElement.style.setProperty('--MouseYhtml', htmlx * -1 + 'turn')
    document.documentElement.style.setProperty('--MouseXhtml', htmly + 'turn')
}, [mousePosition]);



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
        <div class='columnpy'><img src={python} width={350} className="langicon" alt="python logo" /><h1>Python</h1></div>
        <div class='columnjar'><img src={java} width={200} className="langicon" alt="java logo" /><h1>Java</h1></div>
        <div class='columnhtml'><img src={html} width={350} className="langicon" alt="html 5 logo" /><h1>Web</h1></div>
      </div>
      <p>
      Your cursor position:
      <br />
      {JSON.stringify(mousePosition)}
    </p>
    </>
  )
}



export default App
