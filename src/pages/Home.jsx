import About from '../components/HomeComponents/About';
import Faqs from '../components/HomeComponents/Faqs';
import Header from '../components/HomeComponents/Header';
import Hero from '../components/HomeComponents/Hero';
import Homecontact from '../components/HomeComponents/Homecontact';
import Projects from '../components/HomeComponents/Projects';
import Skills from '../components/HomeComponents/Skills';

function Homepage() {

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

export default Homepage;