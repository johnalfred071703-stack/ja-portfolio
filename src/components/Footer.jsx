import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      background: '#111',
      borderTop: '1px solid #1a1a1a',
      padding: '2.5rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.2rem',
    }}>

      <div style={{ display: 'flex', gap: '1.2rem' }}>
        {[
          { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/john-alfred-martinez-b23b66320/', color: '#0a66c2' },
          { icon: <MdEmail size={22} />, href: 'mailto:johnalfred071703@gmail.com', color: '#00e676' },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noreferrer"
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: '#1e1e1e', border: '1px solid #2a2a2a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#a0a0a0', textDecoration: 'none', transition: 'all 0.3s'
            }}
            onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#a0a0a0'; e.currentTarget.style.borderColor = '#2a2a2a'; }}>
            {s.icon}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['home', 'projects', 'contact'].map(sec => (
          <Link key={sec} to={sec} smooth duration={1000} offset={-70}
            style={{ color: '#555', fontSize: '0.82rem', cursor: 'pointer', textTransform: 'capitalize', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#00e676'}
            onMouseLeave={e => e.target.style.color = '#555'}>
            {sec}
          </Link>
        ))}
      </div>

      <p style={{ color: '#333', fontSize: '0.75rem', fontFamily: 'Fira Code', textAlign: 'center' }}>
        © 2025 Designed by <span style={{ color: '#00e676' }}>John Alfred E. Martinez</span>
      </p>

    </footer>
  );
}

export default Footer;