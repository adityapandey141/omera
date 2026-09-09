import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import ServicesPage from '../pages/Services';
import ProjectsPage from '../pages/Projects';
import CapabilitiesPage from '../pages/Capabilities';
import WhyOmreaPage from '../pages/WhyOmrea';
import LeadershipPage from '../pages/Leadership';
import ContactPage from '../pages/Contact';
import Modal from './Modal';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function AppRouter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <ScrollToAnchor />
      <Routes>
        <Route element={<Layout openModal={openModal} />}>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage openModal={openModal} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage openModal={openModal} />} />
          <Route path="/why-omrea" element={<WhyOmreaPage openModal={openModal} />} />
          <Route path="/leadership" element={<LeadershipPage openModal={openModal} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home openModal={openModal} />} />
        </Route>
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
