import React from 'react';
import AboutUs from './pages/AboutUs'; 
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './components/layout/Nav';

function App() {
  return (
    <div>
      <Nav />
        <Routes>
          <Route exact path="/" element={<AboutUs/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
