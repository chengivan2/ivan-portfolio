import './App.css'
/*import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Faqs from './components/Faqs'
import Homecontact from './components/Homecontact'

function App() {

  return (
    <div className='app-wrapper'>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Faqs />
    <Homecontact />
    
    </div>
  )
}*/


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects />} />
        // other routes...
      </Routes>
    </BrowserRouter>
  );
}

export default App