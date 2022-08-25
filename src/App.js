import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PumbaProject } from './components/exports'
import './App.css'
import Layout from './components/Layout'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                </Route>
                <Route path="/pumba_project" element={<PumbaProject />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App