import { useState } from 'react'
import Header from './components/header'
import Navbar from './components/Navigation'
import './styles/App.css'
import { Outlet } from 'react-router-dom'

function App() { 
  return (
    <>
    <Header name="Adarshpreet" />
    <Navbar />  
    <main className=''>
      <Outlet/>  
    </main>  
    </>

  )
}

export default App
