import React from 'react'
import './projects.css'
import pumba_card from '../../assets/pumba_project.png'
import events_card from '../../assets/invitation_design.png'
import nogayoga_card from '../../assets/nogayoga_project.png'
import { Link } from 'react-router-dom'
// import { Button } from 'bootstrap';

const shadowStyles = {
    boxShadow: '3px 3px 6px #2E0D01',
};
//style={shadowStyles}

const Projects = () => {
    return (
        <div className='portfolio_projects' id='projects'>
            <div className='projects_row1'>
                <div className='project_card' id="pumba_project">
                    <Link to='pumba_project'><img src={pumba_card} alt='pumba_project' /></Link>
                </div>
                <div className='project_card' id="events">
                <Link to='events'><img src={events_card} alt='events' /></Link>
                </div>
            </div>
            <div className='projects_row2'>
                <div className='project_card' id="noga_yoga">
                    <Link to='noga_yoga'><img src={nogayoga_card} alt='noga_yoga' /></Link>
                </div>
                <div className='project_card' id="social_media">
                    <Link to=''><img src={nogayoga_card} alt='social_media' /></Link>
                </div>
            </div>
    
                
            {/* <div id='project-pumba'> */}
            {/* <div className='project-brand gradient_pumba-bg'>
                    {/* <img src={pumbaLogo} alt='pumba' /> */}
            {/* </div> */}
            {/* </div > */}
        </div>

    )
}

export default Projects