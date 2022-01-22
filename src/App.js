import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='big-container'>
      <div className='container'>
        <Header />
        <About />
        <Footer />
      </div>
    </div>
  );
}
