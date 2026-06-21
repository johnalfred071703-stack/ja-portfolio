import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../ThemeContext';
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from 'react-icons/md';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accent  = '#4f46e5';
  const textDim = dark ? '#a0a0a0' : '#6b7280';
  const bg      = dark
    ? scrolled ? 'rgba(13,13,13,0.97)' : 'transparent'
    : scrolled ? 'rgba(248,248,251,0.97)' : 'transparent';
  const border  = dark ? '#1e1e1e' : '#e2e2f0';
  const menuBg  = dark ? '#111' : '#ffffff';

  const navLinks = ['home', 'about', 'projects', 'contact'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        padding: '1rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.4s ease',
        background: bg,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
borderBottom: `1px solid ${border}`,      }}>
        {/* Logo */}
        <span style={{ fontFamily: 'Fira Code', color: accent, fontSize: '1rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
          &lt;Ja Martinez/&gt;
        </span>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(sec => (
            <Link key={sec} to={sec} smooth duration={1000} offset={-70}
              style={{ color: textDim, cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 600, transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = accent}
              onMouseLeave={e => e.target.style.color = textDim}>
              {sec}
            </Link>
          ))}
          <button onClick={toggle} style={{ background: dark ? '#1e1e1e' : '#f0f0fc', border: `1.5px solid ${dark ? '#2a2a2a' : '#d0d4f7'}`, borderRadius: '50px', padding: '0.35rem 0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', color: accent, fontSize: '1rem', transition: 'all 0.3s' }}>
            {dark ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <a href="/resume.pdf" download="JohnAlfredMartinez_Resume.pdf" target="_blank" rel="noreferrer"
            style={{ border: `2px solid ${accent}`, color: accent, padding: '0.45rem 1.2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '1.5px', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.target.style.background = accent; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = accent; }}>
            RESUME
          </a>
        </div>

        {/* Mobile right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-nav">
          <button onClick={toggle} style={{ background: dark ? '#1e1e1e' : '#f0f0fc', border: `1.5px solid ${dark ? '#2a2a2a' : '#d0d4f7'}`, borderRadius: '50px', padding: '0.35rem 0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', color: accent, fontSize: '1rem' }}>
            {dark ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: accent, fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 999, background: menuBg, borderBottom: `1px solid ${border}`, padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', backdropFilter: 'blur(20px)' }}>
          {navLinks.map(sec => (
            <Link key={sec} to={sec} smooth duration={1000} offset={-70}
              onClick={() => setMenuOpen(false)}
              style={{ color: textDim, cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', fontWeight: 600 }}>
              {sec}
            </Link>
          ))}
          <a href="/resume.pdf" download="JohnAlfredMartinez_Resume.pdf" target="_blank" rel="noreferrer"
            style={{ border: `2px solid ${accent}`, color: accent, padding: '0.6rem 1.2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center' }}>
            RESUME
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;