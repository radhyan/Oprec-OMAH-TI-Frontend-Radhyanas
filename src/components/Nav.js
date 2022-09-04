import React from 'react'
import './nav.css'

function Nav() {
    return (
        <nav>
                <li>
                    <a href='#'>ABOUT</a>
                </li>
                <li>
                    <a href='#'>RESEARCH</a>
                </li>
                <li>
                    <a href='#'>EVENTS</a>
                </li>
                <li>
                    <a href='#'>ARTICLES</a>
                </li>
                <li>
                    <a href='#'>BOOKS</a>
                </li>
                <li>
                    <a href='#'>ENROLLMENT</a>
                </li>
                <div className="signUp">
                <button>
                    <p className="signUpText">SIGN IN/SIGN UP</p>
                </button>
                </div>
            
        </nav>
    )
}

export default Nav