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
  return (
    <div style={{ position: 'relative', overflowX: 'hidden', background: dark ? '#0d0d0d' : '#f8f8fb', minHeight: '100vh', transition: 'background 0.3s' }}>
      <FloatingIcons />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
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