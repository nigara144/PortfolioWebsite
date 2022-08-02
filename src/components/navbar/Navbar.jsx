import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { IoIosMenu } from 'react-icons/io'
import './navbar.css'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0% {transform: translateY(-100px);}
    25% {transform: translateY(0);}
    75% {transform: translateY(0);}
    100% {transform: translateY(-100px);}
`
const JumpText = styled.span`
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
`

const Menu = () => (
    <>
        <p><a href='#home'>HOME</a></p>
        <p><a href='#about'>ABOUT</a></p>
        <p><a href='#projects'>PROJECTS</a></p>
        <p><a href='#footer'>CONTACT</a></p>
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
                        ? <RiCloseLine color="#9D5448" size={30} onClick={() => setToggleMenu(false)} />
                        : <IoIosMenu id='open_menu_icon' color="#9D5448" size={30} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='portfolio_navbar-menu_container scale-up-center'>
                            <div className='portfolio_navbar-menu_container-links'>
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