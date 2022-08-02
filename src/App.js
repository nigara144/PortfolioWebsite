import React from 'react'
import { Header, Footer } from './containers/exports'
import { Navbar, About, Projects, Wrapper } from './components/exports'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            {/* <div className='gradient_bg'> */}
            <div>
                <Navbar />
                <Header />
            </div>
            <Wrapper>
                <About />
            </Wrapper>
            <Wrapper>
                <Projects />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default App