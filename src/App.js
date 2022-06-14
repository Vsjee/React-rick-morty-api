import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <nav style={{
        backgroundColor: "#000",
        width: '100% 1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.8rem',
        margin: '-8px',
        gap: '1.5rem',
      }}>
        <Link to='/home' className='link--item'>Home</Link>
        <Link to='/rick' className='link--item'>Rick Sanchez</Link>
        <Link to='/morty' className='link--item'>Morty Smith</Link>
        <Link to='/Annie' className='link--item'>Annie</Link>
        <Link to='/Antenna' className='link--item'>Antenna Rick</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
