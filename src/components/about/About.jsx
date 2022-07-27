import React from 'react'
import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
    return (
        <div className='portfolio_about section_padding' id='about'>
            <div className='portfolio_about-content'>
                <Container>
                    <div className='portfolio_about-content-section'>
                        <h2 className='subtitle_education'>Education</h2>
                        <p className='about_time-span'>2017-2022</p>
                        <p className='about_text'>Afeka College of Engineering</p>
                    </div>
                    <div className='portfolio_about-content-section'>
                        <h2 className='subtitle_experience'>Experience</h2>
                        <p className='about_time-span'>2021-2022</p>
                        <p className='about_text'>QA Manager at Pumba Parking</p>
                    </div>
                    <div className='portfolio_about-content-section'>
                        <h2 className='subtitle_skills'>Software skills</h2>
                        <p className='about_text'>React js</p>
                        <p className='about_text'>Adobe XD</p>
                        <p className='about_text'>Figma</p>
                    </div>
                </Container>
                <Container>
                    <div className='portfolio_about-content-section'>
                        <h2 className='subtitle_skills'>Languages</h2>
                        <p className='about_text'>English</p>
                        <p className='about_text'>Hebrew</p>
                        <p className='about_text'>Russian</p>
                        {/* <CircularProgressWithLabel value={progress} /> */}
                    </div>
                    <div className='portfolio_about-content-section'>
                        <h2 className='subtitle_skills'>Key strengths</h2>
                        <p className='about_text'>Organized and responsible</p>
                        <p className='about_text'>Detail oriented</p>
                        <p className='about_text'>Creative</p>
                        <p className='about_text'>Communicative</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About