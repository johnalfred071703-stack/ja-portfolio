import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import { ThemeProvider, useTheme } from './ThemeContext';
import './index.css';

function AppInner() {
  const { dark } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', background: dark ? '#0d0d0d' : '#f8f8fb', minHeight: '100vh', transition: 'background 0.3s' }}>
      <FloatingIcons />
      <div style={{
        pointerEvents: modalOpen ? 'none' : 'auto',
        filter: modalOpen ? 'brightness(0.3)' : 'none',
        transition: 'filter 0.3s'
      }}>
        <Navbar />
        <Hero />
        <About />
      </div>
      <Projects onModalChange={setModalOpen} />
      <div style={{
        pointerEvents: modalOpen ? 'none' : 'auto',
        filter: modalOpen ? 'brightness(0.3)' : 'none',
        transition: 'filter 0.3s'
      }}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;