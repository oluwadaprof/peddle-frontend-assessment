import React from 'react'
import './nav.scss'

const Nav = () => {
    return (
        <div className='nav' >
            <div className='logo'>Logo</div>
            <div className="navlink__container">
                <p>ABOUT US</p>
                <p>BLOG</p>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Nav