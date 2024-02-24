import About from '../components/HomeComponents/About';
import Faqs from '../components/HomeComponents/Faqs';
import Homeheader from '../components/HomeComponents/Homeheader';
import Hero from '../components/HomeComponents/Hero';
import Homecontact from '../components/HomeComponents/Homecontact';
import Projects from '../components/HomeComponents/Projects';
import Skills from '../components/HomeComponents/Skills';
import '../pagesstyles/Home.css'

function Homepage() {

  return (
    <div className='home-wrapper'>

        <Homeheader />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Faqs />
        <Homecontact />
      
    </div>
  )
}

export default Homepage;