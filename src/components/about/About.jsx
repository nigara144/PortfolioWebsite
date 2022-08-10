import React from 'react'
import './about.css'
import { CircularProgressBar } from '../exports'

const About = () => {
    const lang1 = { lang: 'English', percentage: 90, level: 'Native' };
    const lang2 = { lang: 'Hebrew', percentage: 100, level: 'Native' };
    const lang3 = { lang: 'Russian', percentage: 80, level: 'Native' };

    return (
        <div className='portfolio_about section_padding' id='about'>
            <div className='portfolio_about-content'>
                <div className='portfolio_about-content-section'>
                    <h2 className='subtitle_education'>Education</h2>
                    <p className='about_time-span'>2017-2022</p>
                    <p className='about_text'>Afeka College of Engineering</p>
                </div>
                <div className='portfolio_about-content-section'>
                    <h2 className='subtitle_experience'>Experience</h2>
                    <p className='about_time-span'>2021-present</p>
                    <p className='about_text'>QA Manager & part time UI Designer at Pumba Parking</p>
                </div>
                <div className='portfolio_about-content-section'>
                    <h2 className='subtitle_skills'>Software skills</h2>
                    <p className='about_text'>React js</p>
                    <p className='about_text'>Adobe XD</p>
                    <p className='about_text'>Figma</p>
                </div>
                <div className='portfolio_about-content-section'>
                    <h2 className='subtitle_skills'>Key strengths</h2>
                    <p className='about_text'>Organized and responsible</p>
                    <p className='about_text'>Detail oriented</p>
                    <p className='about_text'>Creative</p>
                    <p className='about_text'>Communicative</p>
                </div>
                <div className='portfolio_about-content-section'>
                    <h2 className='subtitle_skills'>Languages</h2>
                    <div className='circle_progress_bars'>
                        <CircularProgressBar {...lang1} />
                        <CircularProgressBar {...lang2} />
                        <CircularProgressBar {...lang3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About