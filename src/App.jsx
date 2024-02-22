import './App.css'
import Header from './components/Header'
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
}

export default App
