import React from 'react'
import { VscFiles } from "react-icons/vsc";
import { FiClock } from "react-icons/fi";
import video from "./assets/video.mp4";
import poster from "./assets/videoIcon.jpg";
import './App.css'

function App() {
  return (
    <>
      <div className="background">
        <div className="content">
          <div className="info">
            <div className="header">
              <h1 className='title'>Lightning-Fast Data Transfers</h1>
              <p>Expiriences the power of lightning-fast data transfers, a standout feature of this revolucionary
                 encryption solution </p>
            </div>
            <div className="bottom">
              <div className="left">
                <VscFiles className='icon'/>
                <h1 className='subtitle'>Rapid File Transfer</h1>
                <p className='comment'>Effortlessly transfer large files in a fraction of the time</p>
              </div>
              <div className="right">
                <FiClock className='icon'/>
                <h1 className="subtitle">Real-Time Streaming</h1>
                <p className='comment'>Get instant access to critical information without any lag or delay</p>
              </div>
            </div>
          </div>
          <video src={video} width={400} height={240} controls muted poster={poster} className='video'>
             Change you browser, it's trash!
          </video>
        </div>
      </div>
    </>
  )
}

export default App
