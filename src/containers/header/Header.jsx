import React from 'react'
import './header.css'
import Resume from '../../assets/Nigar Azadaliyev - Resume.pdf'
import { FiDownload } from 'react-icons/fi'

// const shadowStyles = {
//     boxShadow: '4px 4px 17px 9px #C7C4C4',
//     margin: '4rem'
// };

const Header = () => {
    return (
        <div className='portfolio_header section_padding' id='home'>
            <div className='portfolio_header-content'>
                <h1 className='title_text'>Nigar Azadaliyev</h1>
                <h2 className='subtitle'>Welcome to my space.<br></br>Lets create something great together!</h2>
                {/* <p>UX UI | Web | Mobile | Branding | Events</p> */}
                {/* <p>[This website was build in React.js by me]</p> */}
                {/* <a href={Resume} download className='btn'>Download Resume <FiDownload size={20} className='download_icon' /></a> */}
            </div>
            {/* <div className='portfolio_header-image slide-top'> - makes the image slide animation*/}
            {/* <div className='portfolio_header-image '>
                <img src={profilePic} alt="profile" />
            </div> */}
        </div>
    )
}

export default Header