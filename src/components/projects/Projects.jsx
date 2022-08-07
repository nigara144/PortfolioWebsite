import React from 'react'
import './projects.css'
// import pumbaLogo from '../../assets/pumbaLogo2.png'
import pumba_card from '../../assets/pumba_card.png'

const shadowStyles = {
    boxShadow: '3px 3px 6px #2E0D01',
};

const Projects = () => {
    return (
        <div className='portfolio_projects' id='projects'>
            <h2 className='subtitle'>Projects</h2>
            <div className='project-content'>
                <div className='project_card' id="pumba_project">
                    <img style={shadowStyles} src={pumba_card} alt='/pumba' />
                    <h3>Pumba Parking</h3>
                    <p>Mobile app that finds parking spots</p>
                    <p>Redesign UI</p>
                </div>
                <div className='project_card' id="bbetter_project">

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