import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/home';
import { Rick } from './routes/rick';
import { Morty } from './routes/morty';
import { Annie } from './routes/annie';
import { Antenna } from './routes/antenna';
import { Random } from './routes/random';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='home' element={<Home />}/>
          <Route path='rick' element={<Rick />}/>
          <Route path='morty' element={<Morty />}/>
          <Route path='annie' element={<Annie />}/>
          <Route path='antenna' element={<Antenna />}/>
          <Route path='random' element={<Random />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
