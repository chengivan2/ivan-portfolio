import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Aboutpage from './pages/About';
import Contactpage from './pages/Contact';
import Projectspage from './pages/Projects';
import Footer from './components/HomeComponents/Footer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="contact" element={<Contactpage/>} />
        <Route path="projects" element={<Projectspage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App