import { useState } from 'react'
import './App.css'
import Home from './page/home'
import { Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage/HomePage'
import LoginComponent from './Auth/login'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
    </>
  )
}

export default App
