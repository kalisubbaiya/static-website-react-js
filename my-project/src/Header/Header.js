import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='fixed'>
            <div className='logo'>WEMOUND</div>
            <div className='nav'>
                <nav>
                    <a href='#home'>Home</a>
                    <a href='#about'>About Us</a>
                    <a href='#contact'>Contact Us</a>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header