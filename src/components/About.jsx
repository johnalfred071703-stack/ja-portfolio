import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const skills = [
  'Flutter', 'JavaScript', 'HTML/CSS',
  'Java', 'Arduino',  'Figma',
  'Manual QA', 'Regression Testing', 'IoT Systems', 'Dart'
];

function About() {
  const { dark } = useTheme();
  const bg      = dark ? '#111111' : '#ffffff';
  const accent  = dark ? '#00e676' : '#4f46e5';
  const textMain= dark ? '#f0f0f0' : '#0f0f1a';
  const textDim = dark ? '#a0a0a0' : '#6b7280';
  const tagBg   = dark ? '#1a1a1a' : '#f0f0fc';
  const tagBorder=dark ? '#2a2a2a' : '#d0d4f7';

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '5rem 3rem', position: 'relative', zIndex: 1, background: bg, transition: 'background 0.3s' }}>
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
          style={{ flex: '1', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '280px', height: '280px', borderRadius: '50%', border: `3px solid ${accent}`, overflow: 'hidden', boxShadow: `0 0 40px ${accent}20` }}>
            <img src="/about.png" alt=" Martinez" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
          style={{ flex: '2', minWidth: '300px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: textMain }}>
            About <span style={{ color: accent }}>Me</span>
          </h2>
          <p style={{ color: textDim, lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>
            Hi there! I'm <span style={{ color: textMain, fontWeight: 600 }}>John Alfred  Martinez</span>, a fresh Computer Engineering graduate from the Polytechnic University of the Philippines – Sta. Maria Campus.
          </p>
          <p style={{ color: textDim, lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>
            I specialize in mobile app development using Flutter & Firebase, IoT system integration with Arduino/ESP32, and software quality assurance. I led the development of ChickTech, an IoT-based poultry monitoring system, as my capstone project.
          </p>
          <p style={{ color: textDim, lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
            I'm a consistent academic achiever — President's Lister and Dean's Lister throughout college — and I'm passionate about building reliable, real-world technology solutions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {skills.map(skill => (
              <span key={skill} style={{ border: `1.5px solid ${tagBorder}`, color: accent, padding: '0.3rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontFamily: 'Fira Code', background: tagBg }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;