import React from 'react'
import './pumba_project.css'
import { Navbar } from '../../components/exports'
import pumba_logo from '../../assets/pumbaLogoF.png'
import pumba_screens from '../../assets/screens.png'
import pumba_icons from '../../assets/icons.png'
import user_persona from '../../assets/user_persona.png'
import old_design from '../../assets/old_design.png'
import new_design from '../../assets/new_design.jpeg'
import new_design2 from '../../assets/new_design2.png'
import {MdArrowForward } from "react-icons/md"
import { Footer } from '../../containers/exports'

// import { Link, useNavigate } from 'react-router-dom'


const Pumba_project = () => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     // 👇️ replace set to true
    //     navigate('/#about', {replace: true});
    //   };

    return (
        <>
            <Navbar />
            <div className='first_background'>
                <div className='title_container'>
                    <div className='pumba_logo'>
                        <img src={pumba_logo} alt='pumba_logo' />
                        <h3 className='brand_name'>Find on street parking</h3>
                        <p>Pumba is a B2C startup company that launched
                            a mobile app to help local drivers find street parking
                            near their home. It uses sensors spread across the city
                            to detect empty spots, send them to the server and display in the client side.
                            I started working there a little over 2 years ago
                            as a QA engineer and slowly made my way to the UX/UI team,
                            made significant changes in the design and gained knowledge in the field.</p>
                    </div>
                </div>
                <div className='pumba_screens'>
                    <img src={pumba_screens} alt='pumba_screens' />
                </div>
            </div>
            <div className='second_background'>
                <div className='user_research_container'>
                    <h2>User Research</h2>
                    <img src={user_persona} alt='user_persona' />
                </div>
                <div className='design_process_container'>
                    <h2>Design Process</h2>
                    <p>We had an old design for the app that was consisted a map with pins of the free parking spots for the user to have a visual image of the situation
                        while driving and looking for a free spot in the street.<br></br>When we started adding features like a user reporting about a free spot we realized there is
                        too much going on on the screen and that might be an overload for the user.<br></br><br></br>
                        At this point I joined the UI redesign effort and made a few changes and created some new things:
                        Replaced the pins to be smaller but still noticable, icons to be filled instead of hollow to add attention to the details of the spot, 
                        navigation buttons smaller with a clear icon(like Google Maps), the 'stop' button needed to be more noticable therefore we made it red.
                        Another big update was to be focused of 1 spot at a time so it will be colored in purple and it's tooltip will appeare instead of all tooltips be displayed on the map.
                        Here you can see the old design of the app:
                    </p>
                    <img src={old_design} alt='old_design' id='old_design' />
                    {/* <p>What was wrong with the old design: pins were too big. If i have a lot of free parking spots the map can get really crowded and the user wont be able to understand it.
                        Which misses the point why we thought initially to show a map, from user interviews in came up that they wanted a visual of the spots location and not just "dry" info
                    </p>
                    <p>Another way to take the load off the map is to not display address tooltips and instead the card of the focused spot will be colored as well as it's pin</p> */}
                    {/* <img src={user_persona} alt='user_persona' /> */}
                    {/* <p>After gathering all the info from the user interviews and having
                        meetings with the PM, I started collecting relevant examples from
                        Dribble and Behance - that are relevant for parking apps.</p> */}
                </div>
                <div className='colors_container'>
                    <h2>Colors</h2>
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

                {/* <button onClick={handleClick}>Go back</button> */}

                {/* <div className='icons_container'>
                    <img src={pumba_icons} alt='pumba_icons' />
                </div> */}
                {/* <div className='typography'>
                <h2>Typography</h2>
                   <p>Abcdefghijklmnopkrstuvwxyz</p>
                   <p>אבגדהוזחטיכלמנסעפצקרשת</p>
                </div> */}
                <div className='design_screens_login'>
                    <h2>Design - SignUp</h2>
                    <div className='second_row'>
                        <img src={new_design2} alt='new_design2' />
                    </div>
                </div>
                <div className='design_screens'>
                    <h2>Design - Flow</h2>
                    <div className='first_row'>
                        {/* <MdArrowForward size={20} className='arrow_icon' /> */}
                        <img src={new_design} alt='new_design' />
                    </div>
            
                </div>
                <span><p>This website was created by Me with React.JS</p></span>
            </div>
        </>
    )
}

export default Pumba_project