import { useState } from 'react'
import profilePic from './Component/assets/profile-pic.png'
import photoImg from './Component/assets/gallery.png'
import Header from './Component/Header.jsx';
import './App.css'
import Sidebar from './Component/Sidebar.jsx';

function Content() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='content-container'>
        <Sidebar />

        <div className='comment-box'>
          <div className='commentarea'>
            <img src={profilePic} className='profilesize'></img>
            <div className='text-area'>
              <textarea placeholder='What happened today?'></textarea>
              <img className='imgsize' src={photoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;
