import React from 'react'
import './pumba_project.css'
import { Navbar } from '../../components/exports'
import pumba_logo from '../../assets/pumbaLogoF.png'
import pumba_screens from '../../assets/screens.png'



const Pumba_project = () => {
    return (
        <>
            <Navbar />
            <div className='first_background'>
                <div className='title_container'>
                    <h2 className='title_project'>Project 1 - Redesign UI</h2>
                    <div className='pumba_logo'>
                        <img src={pumba_logo} alt='pumba_logo' />
                        <h3 className='brand_name'>Find on street parking</h3>
                        <p>Pumba is a startup company that launched
                            a mobile app to help local drivers find parking
                            near their home.</p>
                    </div>
                </div>
                <div className='pumba_screens'>
                    <img src={pumba_screens} alt='pumba_screens' />
                </div>
            </div>
            <div className='my_job'>
                <h2>My job at Pumba:</h2>
                <p>I started as a QA engineer, got promoted
                    to QA Manager and by that time started
                    to get invested in the app's UI design, working
                    close with the PM and making valuable changes.</p>
            </div>
            <div className='second_background'>
                <div className='challenge_text'>
                    <h2>What the design task was and how I accomplished it</h2>
                    <p>After gathering all the info from the user interviews and having
                        meetings with the PM, I started collecting relevant examples from
                        Dribble and Behance - that are relevant for parking apps.</p>
                </div>
                <div className='colors'>
                    <div className='colors_and_hexas'>
                        <div className='rectangle1' />
                        <p>#8F71FE</p>
                    </div>
                    <div className='colors_and_hexas'>
                        <div className='rectangle2' />
                        <p>#F8D070</p>
                    </div>
                    <div className='colors_and_hexas'>
                        <div className='rectangle3' />
                        <p>#ECE7FF</p>
                    </div>
                    <div className='colors_and_hexas'>
                        <div className='rectangle4' />
                        <p>#4D4D4D</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pumba_project