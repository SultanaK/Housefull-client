import React from 'react'
import housewill from '../housewill-logo.png'
import './Logo.css'
export default function Logo() {
    return (
        <div>
            <nav className="logo">
                <img src={housewill} className="App-logo" alt="logo" />
            </nav> 
        </div>
    )
}
