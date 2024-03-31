import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contacts from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          
        <Route  index element={<Home />} />
        <Route  path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contacts" element={<Contacts />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);