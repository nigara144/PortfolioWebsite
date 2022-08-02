import React from 'react'
import './footer.css'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className='contact' id='footer'>
            <h2>Contact Me</h2>
            <h4>Get In Touch</h4>
            <div className='portfolio_contact-info'>
                <button className='btn btn-contact'><MdEmail size={20} className='contact_icon' /> nigar2azad @gmail.com</button>
                <button className='btn btn-contact'><MdPhone size={20} className='contact_icon' /> +972-533372015</button>
                <button className='btn btn-contact'><MdLocationOn size={20} className='contact_icon' /> Or Akiva, Israel</button>
                <button className='btn btn-contact'><GrLinkedinOption size={20} className='contact_icon' /> Linkedin profile</button>
            </div>
        </div>
    )
}

export default Footer