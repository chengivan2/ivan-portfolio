import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Aboutpage from './pages/About';
import Contactpage from './pages/Contact';
import Projectspage from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="contact" element={<Contactpage/>} />
        <Route path="projects" element={<Projectspage />} />
        // other routes...
      </Routes>
    </BrowserRouter>
  );
}

export default App