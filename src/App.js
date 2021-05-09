import React from 'react';
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <header>
        
      </header>
      <main>
        <Nav></Nav>
        <About></About>
        <ContactForm></ContactForm>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
