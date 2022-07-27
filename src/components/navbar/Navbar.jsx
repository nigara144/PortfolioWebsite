import React, { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
    <>
        <p><a href='#home'>HOME</a></p>
        <p><a href='#about'>ABOUT</a></p>
        <p><a href='#projects'>PROJECTS</a></p>
        <p><a href='#contact'>CONTACT</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='portfolio_navbar'>
            <div className='portfolio_navbar-links'>
                <div className='portfolio_navbar-links_title'>
                    <p>PORTFOLIO</p>
                </div>
                <div className='portfolio_navbar-links_container'>
                    <Menu />
                </div>
                <div className='portfolio_navbar-menu'>
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='portfolio_navbar-menu_container scale-up-center'>
                            <div className='portfolio_navbar-menu_links'>
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar