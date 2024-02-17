import React from 'react'
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App