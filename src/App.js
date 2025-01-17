import React from 'react';
import './App.css';
import Nav from  './components/Nav'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </>
    
  );
}

export default App;
