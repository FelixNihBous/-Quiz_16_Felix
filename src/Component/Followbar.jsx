import React from 'react'
import profilePic from './assets/profile-pic.png'
import addImg from './assets/add.png'
import './css/followbar.css'


export default function Followbar() {
    return (
        <div className='followbar-container'>
            <div className='notifwrapper'>
                <div className='wrappercontent'>
                    <h1 className='gill-sans bold'>Who to follow</h1>
                    <div className='profileinfo gap flex margintop lightorange'>
                        <img className='imgsize25px' src={profilePic}></img>
                        <p className='gill-sans'>tereke7319</p>
                        <img className='imgsize' src={addImg} alt="" />
                    </div>
                    <div className='profileinfo gap flex margintop lightorange'>
                        <img className='imgsize25px' src={profilePic}></img>
                        <p className='gill-sans'>rageyoc579</p>
                        <img className='imgsize' src={addImg} alt="" />
                    </div>
                </div>
                    <a className='seemore-btn margintop' href="https://google.com/">See More</a>
            </div>
        </div>
    )
}
