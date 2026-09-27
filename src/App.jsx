import { useState, useEffect } from 'react'
import viteLogo from './assets/icon.png'
import './App.css'
import { projectinfo } from './hooks/data.js'
import { DecryptReveal } from '@/components/canvasui/DecryptReveal';
import ParticleScroll from './components/canvasui/ParticleScroll.jsx';
import Grid from '@/components/canvasui/Grid';
import balls from './assets/projects/output.gif';
import screen from './assets/IMG_2121.png';
import pojecticon from './assets/imageout.png';

// todo add smothing to icon, add real info
function App() {

  return (
    <>
<ParticleScroll style={{ width: "100vw", height: "100vh" }}>
      <center>
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

          <h1>My Projects</h1>
          <div className='horizontal-container'>
                  <img className="mainimg" src={pojecticon} alt="robot ball" />
            <div>
              <h1 className='maintext' >Robot ball</h1>
              <h2>I got the idea when i was taking apart an old sphero bb8 i wanted to fix the battery but it didn't work but that gave me the idea. i originally wanted to make it much bigger but my 3d printer wasn't big enough to do that </h2>
            </div>
          </div>
          <hr className='line'></hr>

          <div className='horizontal-container'>
                  <img className="mainimgscr" src={screen} alt="fridge screen" />
            <div>
              <h1 className='maintext' >fridge screen</h1>
              <h2>I had a old laptop that wasn't turning on anymore so i was think we can make a screen for an homeassistant so i took it apart and got a driver board for it while wiring it up i cooked it. i make sure to not take power out of the driver and just used a buck converter uses 12 v dc barrel connector. still works today </h2>
            </div>
          </div>
          <hr className='line'></hr>
        
          <div className='horizontal-container'>
                  <img className="balls" src={balls} alt="colorful balls bouncing in a window" />
            <div>
              <h1 className='maintext' >Physics sim</h1>
              <h2>A while ago I created a simple python physics engine I think i have lost that version. But for a class project I made one for android. I am ashamed to say but ai did help me make them but im hoping to make a new one some time soon without ai</h2>
            </div>
          </div>
          <hr className='line'></hr>
        </center>
      </ParticleScroll>
    </>
  )
}



export default App
