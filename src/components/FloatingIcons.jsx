import { SiJavascript, SiFlutter, SiFirebase, SiArduino, SiReact, SiDart, SiSupabase } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const icons = [
  { Icon: SiJavascript, color: '#f7df1e', top: '12%', left: '8%',  size: '2rem'   },
  { Icon: SiFlutter,    color: '#54c5f8', top: '75%', left: '5%',  size: '2.2rem' },
  { Icon: SiFirebase,   color: '#ffca28', top: '20%', left: '88%', size: '2rem'   },
  { Icon: SiArduino,    color: '#00979d', top: '70%', left: '85%', size: '2rem'   },
  { Icon: SiReact,      color: '#61dafb', top: '50%', left: '92%', size: '2.2rem' },
  { Icon: FaJava,       color: '#f89820', top: '40%', left: '4%',  size: '2rem'   },
  { Icon: SiDart,       color: '#0175c2', top: '85%', left: '45%', size: '1.8rem' },
  { Icon: SiSupabase,   color: '#3ecf8e', top: '8%',  left: '55%', size: '1.8rem' },
];

function FloatingIcons() {
  const { dark } = useTheme();
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {icons.map(({ Icon, color, top, left, size }, i) => (
        <motion.div key={i}
          style={{ position: 'absolute', top, left, color, fontSize: size, opacity: dark ? 0.2 : 0.1 }}
          animate={{ y: [0, -20, 0], x: [0, i % 2 === 0 ? 10 : -10, 0], rotate: [0, i % 2 === 0 ? 15 : -15, 0], opacity: dark ? [0.15, 0.3, 0.15] : [0.07, 0.15, 0.07] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}>
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingIcons;