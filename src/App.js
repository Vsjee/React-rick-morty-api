import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <nav style={{
        backgroundColor: "#81f",
        width: '100% 1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        margin: '-8px',
        gap: '1.5rem',
      }}>
        <Link to='/home'>Home</Link>
        <Link to='/rick'>Rick Sanchez</Link>
        <Link to='/morty'>Morty Smith</Link>
        <Link to='/Annie'>Annie</Link>
        <Link to='/Antenna'>Antenna Rick</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
