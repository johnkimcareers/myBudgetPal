import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Budget from './components/Budget/Budget'
import Display from './components/Display/Display'
import Me from './components/Me/Me'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Display />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/userInfo" element={<Me />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
