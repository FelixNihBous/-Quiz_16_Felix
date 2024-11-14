import React from 'react'
import { useState } from 'react';
import './css/header.css'
import verifyLogo from './assets/verify.png'

function Header() {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='header-container'>
            <p className='sio-text'>SO<span className='cio-text'>CIO.</span></p>
            <div className='profile'>
                <img className='verifyimg' src={verifyLogo}></img>
                <p className='verifytext'>verified</p>
                <select className='user-profile' value={selectedOption} onChange={handleChange}>
                    <option value="option1">kigewew826</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    )
}

export default Header;