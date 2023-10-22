import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PumbaProject } from './components/exports'
import { Events, NogaYoga } from './components/exports'
import { Header, About } from './containers/exports'
import './App.css'
import Layout from './components/Layout'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                </Route>
                <Route path="/" element={<Header />} />
                <Route path="/about" element={<About />} />
                <Route path="/pumba_project" element={<PumbaProject />} />
                <Route path="/events" element={<Events />} />
                <Route path="/noga_yoga" element={<NogaYoga />} />
                {/* <Route path="/noga_yoga_app" element={<NogaYogaApp />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App