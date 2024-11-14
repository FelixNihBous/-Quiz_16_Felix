import { useState } from 'react'
import profilePic from './Component/assets/profile-pic.png'
import InputphotoImg from './Component/assets/gallery.png'
import messageImg from './Component/assets/message.png'
import MicrophoneImg from './Component/assets/microphone.png'
import HappinesImg from './Component/assets/happiness.png'
import thumbsUpImg from './Component/assets/like.png'
import replyImg from './Component/assets/reply.png'
import Header from './Component/Header.jsx';
import Followbar from './Component/Followbar.jsx'
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
            <div className='commentborder'>
              <img src={profilePic} className='profilesize'></img>
              <div className='text-area'>
                <textarea placeholder='What happened today?'></textarea>
              </div>
            </div>
            <div className='commentnavigation'>
              <div className='imglist'>
                <img className='imgsize25px navimage' src={InputphotoImg} alt="" />
                <img className='imgsize25px navimage' src={MicrophoneImg} alt="" />
                <img className='imgsize25px navimage' src={HappinesImg} alt="" />
              </div>
              <button className='sharebtn'>Share</button>
            </div>
          </div>
          <h1 className='gill-sans bold commentlist'>What's Happening?</h1>
          <div className='comments'>
            <div className='profile1 marginbot borderbottom'>
              <div className='userprofile'>
                <img src={profilePic} className='imgsize' alt="" />
                <p className='gill-sans bold'>tereke7319</p>
                <p className='lightgray'>40 days ago</p>
              </div>
              <p className='arial commentcontent'>Makan apa nich</p>
              <div className='commentrespons marginbot'>
                <div className='thumbs flex gap-btn lightgray'>
                  <img className='imgsize thumbsup' src={thumbsUpImg} alt="" />
                  <p>0</p>
                </div>
                <div className='thumbs flex gap-btn lightgray'>
                  <img className='imgsize messageicon' src={messageImg} alt="" />
                  <p>10</p>
                </div>
                <div className='thumbs flex gap-btn lightgray'>
                  <img className='imgsize replyicon' src={replyImg} alt="" />
                  <p>10</p>
                </div>
              </div>
            </div>
            <div className='profile2 margintop marginbot'>
              <div className='userprofile'>
                <img src={profilePic} className='imgsize' alt="" />
                <p className='gill-sans bold'>tereke7319</p>
                <p className='lightgray'>40 days ago</p>
              </div>
              <p className='arial commentcontent'>Selamat Malam</p>
              <div className='commentrespons'>
                <div className='thumbs flex gap-btn lightgray'>
                  <img className='imgsize thumbsup' src={thumbsUpImg} alt="" />
                  <p>0</p>
                </div>
                <div className='thumbs flex gap-btn lightgray'>
                  <img className='imgsize messageicon' src={messageImg} alt="" />
                  <p>10</p>
                </div>
                <div className='thumbs flex gap-btn lightgray'>
                  <img className='imgsize replyicon' src={replyImg} alt="" />
                  <p>10</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Followbar />
      </div>
    </>
  )
}

export default Content;
