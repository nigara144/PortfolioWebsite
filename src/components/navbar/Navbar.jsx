import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { IoIosMenu } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { RiWhatsappFill, RiLinkedinBoxFill } from 'react-icons/ri'

function onEmailLinkClick(e) {
    e.preventDefault();
    navigator.clipboard.writeText("nigar.azadaliyeva@gmail.com");
}

const Menu = () => (
    <>
        {/* <p><a href='#home'>HOME</a></p> */}
        <div className='left-links'>
            <Link to='/' id='home_navbar_link'>HOME</Link>
            <Link to='/about' id='about_navbar_link'>ABOUT</Link>
        </div>
        <div className='right-links'>
            <a href="https://www.linkedin.com/in/nigar-azadaliyev-201901196/" className='contact_btn' target='_blank' rel="noreferrer"><RiLinkedinBoxFill size={21} className='contact_icon' /></a>
            <a className='contact_btn' href='https://wa.me/9720533372015' target='_blank' rel="noreferrer"><RiWhatsappFill size={20} className='contact_icon' /></a>
            <a href="/" className='contact_btn' onClick={onEmailLinkClick}><MdEmail size={20} className='contact_icon' /></a>
        </div>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            {/* <div className="navbar-links">
                <div className="navbar-links_container"> */}
                    <Menu />
                {/* </div>
            </div> */}
            {/* <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                    : <IoIosMenu color="black" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default Navbar;