import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { useTheme } from '../ThemeContext';

function Contact() {
  const { dark } = useTheme();
  const bg       = dark ? '#111111' : '#ffffff';
  const accent   = dark ? '#00e676' : '#4f46e5';
  const textMain = dark ? '#f0f0f0' : '#0f0f1a';
  const textDim  = dark ? '#a0a0a0' : '#6b7280';
  const cardBg   = dark ? '#161616' : '#f8f8fb';
  const cardBorder=dark ? '#2a2a2a' : '#d0d4f7';

  return (
    <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '5rem 3rem', position: 'relative', zIndex: 1, background: bg, transition: 'background 0.3s' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: textMain }}>
          Contact <span style={{ color: accent }}>Me</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
          style={{ textAlign: 'center', color: textDim, marginBottom: '3rem', fontFamily: 'Fira Code', fontSize: '0.85rem' }}>
          Ready to collaborate? Let's build something great together.
        </motion.p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: <MdEmail size={26} />, label: 'Email', value: 'johnalfred071703@gmail.com' },
            { icon: <MdPhone size={26} />, label: 'Phone', value: '09352245705' },
            { icon: <MdLocationOn size={26} />, label: 'Location', value: 'Norzagaray, Bulacan, Philippines' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              style={{ background: cardBg, border: `1.5px solid ${cardBorder}`, borderRadius: '16px', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', flex: '1', minWidth: '220px', maxWidth: '100%', boxShadow: '0 2px 12px #00000008' }}>
              <div style={{ color: accent, flexShrink: 0 }}>{item.icon}</div>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: textDim }}>{item.label}</p>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: textMain, wordBreak: 'break-all' }}>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;