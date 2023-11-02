import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Budget from './components/Budget/Budget'
import Display from './components/Display/Display'
import UserInfo from './components/UserInfo/UserInfo'
import Data from './components/Data/Data'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Display />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/data" element={<Data />} />
                    <Route path="/userInfo" element={<UserInfo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
