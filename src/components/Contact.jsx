import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdCheck } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';

function Contact() {
  const { dark } = useTheme();
  const [copied, setCopied] = useState(false);

  const bg       = dark ? '#111111' : '#f8f8fb';
  const accent   = dark ? '#00e676' : '#4f46e5';
  const textMain = dark ? '#f0f0f0' : '#0f0f1a';
  const textDim  = dark ? '#a0a0a0' : '#6b7280';
  const cardBg   = dark ? '#1a1a1a' : '#ffffff';
  const border   = dark ? '#2a2a2a' : '#e2e2f0';

  const handleCopy = () => {
    navigator.clipboard.writeText('09352245705');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '5rem 2rem', background: bg, transition: 'background 0.3s', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}>
          <p style={{ color: accent, fontFamily: 'Fira Code', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '0.75rem' }}>— GET IN TOUCH</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: textMain, lineHeight: 1.1, marginBottom: '1rem' }}>
            Let's work<br /><span style={{ color: accent }}>together.</span>
          </h2>
          <p style={{ color: textDim, fontSize: '0.95rem', maxWidth: '400px', lineHeight: 1.8 }}>
            Open for full-time roles, internships, and freelance projects. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: border, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${border}` }}>

          {/* Email */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=johnalfred071703@gmail.com', '_blank')}
            style={{ background: cardBg, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = dark ? '#222' : '#fafafa'}
            onMouseLeave={e => e.currentTarget.style.background = cardBg}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, flexShrink: 0 }}>
              <MdEmail size={20} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '0.68rem', color: textDim, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: textMain, wordBreak: 'break-all', lineHeight: 1.4 }}>johnalfred071703@gmail.com</p>
            </div>
            <FiArrowUpRight size={18} style={{ color: accent, flexShrink: 0 }} />
          </motion.div>

          {/* Phone */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
            onClick={handleCopy}
            style={{ background: cardBg, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = dark ? '#222' : '#fafafa'}
            onMouseLeave={e => e.currentTarget.style.background = cardBg}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, flexShrink: 0 }}>
              {copied ? <MdCheck size={20} /> : <MdPhone size={20} />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '0.68rem', color: textDim, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Phone</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: textMain }}>09352245705</p>
            </div>
            <span style={{ fontSize: '0.72rem', fontFamily: 'Fira Code', color: copied ? accent : textDim, whiteSpace: 'nowrap', flexShrink: 0 }}>
              {copied ? '✓ Copied!' : 'tap to copy'}
            </span>
          </motion.div>

          {/* Location */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
            onClick={() => window.open('https://maps.google.com/?q=Norzagaray,Bulacan,Philippines', '_blank')}
            style={{ background: cardBg, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = dark ? '#222' : '#fafafa'}
            onMouseLeave={e => e.currentTarget.style.background = cardBg}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, flexShrink: 0 }}>
              <MdLocationOn size={20} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '0.68rem', color: textDim, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Location</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: textMain }}>Norzagaray, Bulacan, Philippines</p>
            </div>
            <FiArrowUpRight size={18} style={{ color: accent, flexShrink: 0 }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;