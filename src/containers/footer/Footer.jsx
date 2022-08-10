import React from 'react'
import './footer.css'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { RiWhatsappFill, RiLinkedinBoxFill } from 'react-icons/ri'


function onEmailLinkClick(e) {
    e.preventDefault();
    navigator.clipboard.writeText("nigar.azadaliyeva@gmail.com");
}

const Footer = () => {
    return (
        <div className='contact' id='footer'>
            <h2>Contact Me</h2>
            <h4>Get In Touch</h4>
            <div className='portfolio_contact-info'>
                <a href="https://www.linkedin.com/in/nigar-azadaliyev-201901196/" className='contact_btn' target='_blank' rel="noreferrer"><RiLinkedinBoxFill size={21} className='contact_icon' /></a>
                <a className='contact_btn' href='https://wa.me/9720533372015' target='_blank' rel="noreferrer"><RiWhatsappFill size={20} className='contact_icon' /></a>
                <a href="/" className='contact_btn' onClick={onEmailLinkClick}><MdEmail size={20} className='contact_icon' /></a>
                <div className='contact_btn'><MdPhone size={20} className='contact_icon' /> +972 53-337-2015</div>
                <div className='contact_btn'><MdLocationOn size={20} className='contact_icon' /> Or Akiva, Israel</div>

                {/* <button className='btn btn-contact'><MdEmail size={20} className='contact_icon' /> nigar2azad @gmail.com</button>
                <button className='btn btn-contact'><MdPhone size={20} className='contact_icon' /> +972-533372015</button>
                <button className='btn btn-contact'><MdLocationOn size={20} className='contact_icon' /> Or Akiva, Israel</button>
                <button className='btn btn-contact'><GrLinkedinOption size={20} className='contact_icon' /> Linkedin profile</button> */}
            </div>
        </div>
    )
}

export default Footer