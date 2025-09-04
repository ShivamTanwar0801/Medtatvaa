import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import axios from 'axios';
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
