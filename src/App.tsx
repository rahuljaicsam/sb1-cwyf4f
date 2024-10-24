import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import Specialties from './pages/Specialties';
import SpecialtyDetail from './pages/SpecialtyDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/specialties/:slug" element={<SpecialtyDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;