import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import './styles/App.css';
import { Outlet, useLocation } from 'react-router-dom';

function App() { 
  
  return (
    <>
    <Header name="Adarshpreet" />
    <Navbar />  
    <main className='main'>
      <Outlet/>  
    </main>  
    <Footer />
    </>

  )
}

export default App
