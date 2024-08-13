import About from '../app/HomeComponents/About';
import Faqs from '../app/HomeComponents/Faqs';
import Homeheader from '../app/HomeComponents/Homeheader';
import Hero from '../app/HomeComponents/Hero';
import Homecontact from '../app/HomeComponents/Homecontact';
import Projects from '../app/HomeComponents/Projects';
import Skills from '../app/HomeComponents/Skills';
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