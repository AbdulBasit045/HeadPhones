import React from 'react'
import Navbar from './components/header/navbar'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
    </Routes>
  )
}

export default App
