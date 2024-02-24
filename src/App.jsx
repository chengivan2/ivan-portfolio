import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Aboutpage from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects />} />
        // other routes...
      </Routes>
    </BrowserRouter>
  );
}

export default App