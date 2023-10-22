import React from 'react'
import './events.css'
import { Navbar } from '../exports'
import first_wedding1 from '../../assets/3.png'
import first_wedding2 from '../../assets/4.png'
import sd_wedding1 from '../../assets/5.png'
import sd_wedding2 from '../../assets/6.png'
import thd_wedding1 from '../../assets/9.png'
import thd_wedding2 from '../../assets/10.png'

const shadowStyles = {
    boxShadow: '3px 3px 2px #b5b5b5',
};

const Events = () => {
    return (
        <>
            <Navbar />
            <div className='events_header_container'> 
                <h2 className='title_project'>Events</h2>
                <h3 className='subtitle'>Wedding Invitations & Menus</h3>
                <div className='first_event'>
                    <img style={shadowStyles} src={first_wedding1} alt='/' />
                    <img style={shadowStyles} src={first_wedding2} alt='/' />
                </div>
                <div className='sd_event'>
                    <img style={shadowStyles} src={sd_wedding1} alt='/' />
                    <img style={shadowStyles} src={sd_wedding2} alt='/' />
                </div>
                <div className='thd_event'>
                    <img style={shadowStyles} src={thd_wedding1} alt='/' />
                    <img style={shadowStyles} src={thd_wedding2} alt='/' />
                </div>
                
            </div>
        </>
    )
}

export default Events