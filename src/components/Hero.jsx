import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { SiFlutter, SiFirebase, SiDart, SiSupabase, SiReact } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const bgIcons = [
  { Icon: SiFlutter,  color: '#54c5f8', top: '14%',    left: '3%'   },
  { Icon: SiFirebase, color: '#ffca28', top: '10%',    right: '2%'  },
  { Icon: FaJava,     color: '#f89820', top: '55%',    left: '2%'   },
  { Icon: SiReact,    color: '#61dafb', bottom: '18%', right: '2%'  },
];

const cardIcons = [
  { Icon: SiDart,     color: '#0175c2', top: '18%',    left: '6%'  },
  { Icon: SiSupabase, color: '#3ecf8e', bottom: '22%', left: '5%'  },
  { Icon: SiFirebase, color: '#ffca28', top: '18%',    right: '6%' },
  { Icon: SiReact,    color: '#61dafb', bottom: '22%', right: '5%' },
];

function Hero() {
  const { dark } = useTheme();

  const bg          = dark ? '#0d0d0d'   : '#f8f8fb';
  const cardBg      = dark ? 'linear-gradient(160deg, #111 0%, #0b180d 100%)' : 'linear-gradient(160deg, #eef0ff 0%, #e8eaf6 100%)';
  const cardBorder  = dark ? '#1e2e1e'   : '#d0d4f7';
  const cardFade    = dark ? '#0b180d'   : '#e8eaf6';
  const pillBg      = dark ? '#0f0f0f'   : '#ffffff';
  const pillBorder  = dark ? '#2a2a2a'   : '#d0d4f7';
  const accent      = dark ? '#00e676'   : '#4f46e5';
  const textMain    = dark ? '#f0f0f0'   : '#0f0f1a';
  const textDim     = dark ? '#555'      : '#6b7280';
  const statsDim    = dark ? '#444'      : '#9ca3af';
  const statsBorder = dark ? '#1a1a1a'   : '#e2e2f0';
  const btnAlt      = dark ? '#111'      : '#ffffff';
  const btnAltBorder= dark ? '#2a2a2a'   : '#d0d4f7';
  const iconBg      = dark ? '#111'      : '#ffffff';
  const iconBorder  = dark ? '#1e1e1e'   : '#e2e2f0';
  const statusBg    = dark ? '#0f0f0f'   : '#ffffff';
  const statusBorder= dark ? '#222'      : '#e2e2f0';
  const progressBg  = dark ? '#1a1a1a'   : '#f0f0f8';
  const badgeBorder = dark ? '#00e67628' : '#d0d4f7';

  return (
    <>
      <style>{`
        .hero-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 4rem 4rem;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          max-width: 1200px;
          width: 100%;
          z-index: 1;
          position: relative;
        }
        .hero-photo {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 95%;
          width: auto;
          object-fit: contain;
          object-position: bottom center;
          z-index: 1;
        }
        .hero-desc {
          font-size: 0.9rem;
          line-height: 1.85;
          margin-bottom: 2rem;
          max-width: 380px;
        }
        .hero-btns {
          display: flex;
          gap: 0.85rem;
          margin-bottom: 2.4rem;
          flex-wrap: wrap;
        }
        .bg-icon {
          position: fixed;
          font-size: 1.8rem;
          opacity: 0.1;
          z-index: 0;
          filter: blur(0.3px);
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .hero-wrap {
            padding: 5rem 1.5rem 3rem;
          }
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-right { order: -1; }
          .hero-card {
            width: 300px !important;
            height: 360px !important;
            margin: 0 auto;
          }
          .hero-h1 {
            font-size: 1.6rem !important;
            word-break: break-word;
          }
          .hero-desc { margin: 0 auto 1.5rem; }
          .hero-btns { justify-content: center; }
          .hero-stats { justify-content: center !important; }
          .bg-icon { display: none; }
          .status-widget {
            min-width: 160px !important;
            padding: 0.5rem 0.75rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 960px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-right { order: -1; }
          .hero-card { width: 340px !important; height: 420px !important; }
          .hero-desc { margin: 0 auto 2rem; }
          .hero-btns { justify-content: center; }
          .hero-stats { justify-content: center !important; }
        }
      `}</style>

      {bgIcons.map(({ Icon, color, top, left, right, bottom }, i) => (
        <motion.div key={i} className="bg-icon"
          style={{ color, top, left, right, bottom }}
          animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}>
          <Icon />
        </motion.div>
      ))}

      <div className="hero-wrap" style={{ background: bg }}>
        <section id="home" className="hero-section">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: pillBg, border: `1px solid ${pillBorder}`, borderRadius: '50px', padding: '0.35rem 1rem', marginBottom: '1.2rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: accent, display: 'inline-block', boxShadow: `0 0 8px ${accent}60` }} />
              <span style={{ color: textDim, fontSize: '0.75rem', fontFamily: 'Fira Code' }}>John Alfred E. Martinez</span>
            </div>

            <h1 className="hero-h1" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.9rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.5px', color: textMain }}>
              <TypeAnimation
                sequence={[
                  "Greetings, I'm John Alfred.", 2000,
                  'A Fresh Computer Engineer.', 2000,
                  'A Thesis Leader.', 2000,
                  'A Software QA Tester.', 2000,
                  'A Problem Solver.', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: accent }}
              />
            </h1>

            <p className="hero-desc" style={{ color: textDim }}>
              Computer Engineering graduate with hands-on experience in Flutter, Firebase, IoT systems, and software QA. Passionate about building reliable, real-world tech.
            </p>

            <div className="hero-btns">
              <a href="/resume.pdf" download="JohnAlfredMartinez_Resume.pdf" target="_blank" rel="noreferrer"
                style={{ background: accent, color: dark ? '#0d0d0d' : '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', boxShadow: `0 4px 20px ${accent}40`, whiteSpace: 'nowrap' }}>
                📄 Download Resume
              </a>
              <Link to="projects" smooth duration={1000} offset={-70}
                style={{ border: `1.5px solid ${btnAltBorder}`, color: accent, padding: '0.75rem 1.5rem', borderRadius: '50px', fontWeight: 600, cursor: 'pointer', fontSize: '0.84rem', background: btnAlt, whiteSpace: 'nowrap' }}>
                View Work →
              </Link>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '2rem', borderTop: `1px solid ${statsBorder}`, paddingTop: '1.5rem' }}>
              {[
                { num: '2',    label: 'Projects Completed' },
                { num: '600+', label: 'OJT Hours'          },
                { num: '2',    label: 'Internships'         },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: '1.7rem', fontWeight: 800, color: textMain, lineHeight: 1 }}>{s.num}</p>
                  <p style={{ color: statsDim, fontSize: '0.68rem', marginTop: '0.3rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="hero-right" initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.15 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-card" style={{ width: '420px', height: '520px', borderRadius: '24px', background: cardBg, border: `1px solid ${cardBorder}`, overflow: 'hidden', boxShadow: '0 24px 64px #00000020', position: 'relative', margin: '0 auto' }}>

              {cardIcons.map(({ Icon, color, top, left, right, bottom }, i) => (
                <motion.div key={i}
                  style={{ position: 'absolute', top, left, right, bottom, color, fontSize: '1.1rem', opacity: 0.9, zIndex: 3, background: iconBg, border: `1px solid ${iconBorder}`, borderRadius: '9px', padding: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}>
                  <Icon />
                </motion.div>
              ))}

              {/* Available badge */}
              <div style={{ position: 'absolute', top: '14px', left: '50%', transform: 'translateX(-50%)', background: pillBg, border: `1px solid ${badgeBorder}`, borderRadius: '50px', padding: '0.28rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem', zIndex: 4, whiteSpace: 'nowrap' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, display: 'inline-block', boxShadow: `0 0 6px ${accent}60` }} />
                <span style={{ color: accent, fontSize: '0.6rem', fontFamily: 'Fira Code', letterSpacing: '1px' }}>AVAILABLE FOR HIRE</span>
              </div>

              <img src="/profile.png" alt="Ja Martinez" className="hero-photo" />

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: `linear-gradient(to top, ${cardFade} 0%, transparent 100%)`, zIndex: 2, pointerEvents: 'none' }} />

              {/* System Status */}
              <motion.div
                className="status-widget"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', background: statusBg, border: `1px solid ${statusBorder}`, borderRadius: '12px', padding: '0.65rem 1rem', minWidth: '185px', zIndex: 5, whiteSpace: 'nowrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem' }}>
                  <span style={{ color: accent, fontSize: '0.82rem' }}>⚡</span>
                  <span style={{ color: textMain, fontWeight: 700, fontSize: '0.74rem' }}>System Status</span>
                </div>
                <div style={{ background: progressBg, borderRadius: '4px', height: '4px', marginBottom: '0.45rem', overflow: 'hidden' }}>
                  <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} style={{ height: '100%', background: accent, borderRadius: '4px' }} />
                </div>
                <p style={{ color: accent, fontSize: '0.55rem', fontFamily: 'Fira Code', letterSpacing: '1.5px' }}>DEPLOYMENT SUCCESSFUL ✓</p>
              </motion.div>

            </div>
          </motion.div>

        </section>
      </div>
    </>
  );
}

export default Hero;