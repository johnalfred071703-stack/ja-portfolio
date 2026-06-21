import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textDim = dark ? '#a0a0a0' : '#6b7280';
  const accent = '#4f46e5';
  const bg = dark
    ? scrolled ? 'rgba(13,13,13,0.97)' : 'transparent'
    : scrolled ? 'rgba(248,248,251,0.97)' : 'transparent';
  const border = dark ? '#00e67615' : '#e2e2f0';

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '1.2rem 5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.4s ease',
      background: bg,
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${border}` : 'none',
    }}>
      <span style={{ fontFamily: 'Fira Code', color: accent, fontSize: '1.1rem', fontWeight: 700 }}>
        &lt;Ja Martinez/&gt;
      </span>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['home', 'about', 'projects', 'contact'].map(sec => (
          <Link key={sec} to={sec} smooth={true} duration={1000} offset={-70}
            style={{ color: textDim, cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '2px', fontWeight: 600, transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = accent}
            onMouseLeave={e => e.target.style.color = textDim}>
            {sec}
          </Link>
        ))}

        {/* Dark/Light toggle */}
        <button onClick={toggle} style={{
          background: dark ? '#1e1e1e' : '#f0f0fc',
          border: `1.5px solid ${dark ? '#2a2a2a' : '#d0d4f7'}`,
          borderRadius: '50px', padding: '0.4rem 0.7rem',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          color: accent, fontSize: '1.1rem', transition: 'all 0.3s'
        }}>
          {dark ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <a href="/resume.pdf" download="JohnAlfredMartinez_Resume.pdf" target="_blank" rel="noreferrer"
          style={{ border: `2px solid ${accent}`, color: accent, padding: '0.5rem 1.3rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '2px', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.target.style.background = accent; e.target.style.color = '#ffffff'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = accent; }}>
          RESUME
        </a>
      </div>
    </nav>
  );
}

export default Navbar;