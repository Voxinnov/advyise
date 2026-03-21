import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
