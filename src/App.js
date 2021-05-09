import React from 'react';
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <ContactForm></ContactForm>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
