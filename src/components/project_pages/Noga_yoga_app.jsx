import React from 'react'
import './noga_yoga_app.css'
import { Navbar } from '../exports'
import wireframes from '../../assets/wireframes.jpeg'
import user_persona from '../../assets/noga_yoga_user.png'
import home from '../../assets/nogaYoga/9.png'
import classVid from '../../assets/nogaYoga/10.png'
import calendar from '../../assets/nogaYoga/11.png'
import calendar2 from '../../assets/nogaYoga/12.png'
import nogaSplash from '../../assets/nogaYoga/nogaapp.png'
import { Footer } from '../../containers/exports'

const Noga_yoga_app = () => {
    return (
        <>
            <Navbar />
            <div className='noga_yoga_page'>
                <div className='header'>
                        <h2 className='title_project'>NogaYoga App</h2>
                        <div className='title-image'>
                        <p>This app is a product of my passion for design and yoga.<br></br>
                            I am a certified yoga teacher and I would like to make yoga classes accesible to everyone, people who have injuries and need a soft flow to recovery.
                            Who want to go back to an active life.<br></br>
                            My design is meant to encorage the user to practice daily, choose whether they want to practice online or come to my class and they have a detailed
                            description of every class.</p>
                        <img src={nogaSplash} alt='nogaSplash' />
                    </div>
                </div>
                <div className='user_research'>
                    <h2>User Research</h2>
                    <img src={user_persona} alt='user_persona' />
                </div>
                <div className='wireframes'>
                    <h2>Wireframes</h2>
                    <img src={wireframes} alt='wireframes' />
                </div>
                <div className='design'>
                    <h2>Design</h2>
                    <div className='design-screens'>
                        <img src={home} alt='home' />
                        <img src={classVid} alt='classVid' />
                        <img src={calendar} alt='calendar' />
                        <img src={calendar2} alt='calendar2' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Noga_yoga_app