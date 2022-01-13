//rafce
import React from 'react'
import "../../App.css"
import logo from "../NavBar/logo.png"

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navLogo'>
                <img src={logo} />
            </div>
            <div className='navLinks'>
                <a href="/home">Home</a>
                <a href="/likedMovie">Liked List</a>
            </div>
        </div>
    )
}

export default Navbar

