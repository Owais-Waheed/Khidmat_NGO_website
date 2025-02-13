import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Events from './components/Events';
import Collaborations from './components/Collaborations';
import Donations from './components/Donations';
import BookAppointment from './components/BookAppointment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Projects />
        <Team />
        <Events />
        <Collaborations />
        <Donations />
        <BookAppointment />
        <Footer />
      </div>
    </div>
  );
}

export default App;