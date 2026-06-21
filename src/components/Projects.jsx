import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTag } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';

const projects = [
  {
    title: 'ChickTech',
    subtitle: 'IoT Capstone Project — Thesis Leader',
    tags: ['Flutter', 'Firebase', 'Arduino', 'ESP32', 'IoT', 'Dart'],
    categories: ['IoT', 'Mobile', 'Capstone'],
    short: 'Led the development of ChickTech, an IoT-based smart poultry monitoring system with automated feeding and watering, built using Flutter and Arduino/ESP32.',
    description: `ChickTech is an IoT-based smart chicken feeding and watering system developed as a capstone project at the Polytechnic University of the Philippines – Sta. Maria Campus. As the project leader, I oversaw end-to-end development of both the hardware and software components.\n\nThe Flutter mobile app connects to Firebase for real-time data sync and features a Water Level Monitor, Feeding Schedule with manual dispense controls, and a ChickTech Assistant chatbot for user guidance. The hardware side uses Arduino/ESP32 for sensor integration and automated dispensing.\n\nThe app supports scheduling by number of chickens and food amount, real-time water level status (HIGH/LOW), pump control automation, and an AI-powered assistant that answers user questions about the system.`,
    gallery: ['/chicktech-splash.jpg', '/chicktech-feeding.jpg', '/chicktech-water.jpg', '/chicktech-assistant.jpg'],
    purpose: 'To automate and monitor poultry feeding and watering for small-scale chicken farmers using affordable IoT technology.',
    architecture: 'Flutter + Firebase mobile app connected to ESP32 microcontroller via real-time database, with sensor-driven automation for feeding and watering.',
  },
  {
    title: 'Makati Waste Management System',
    subtitle: 'Software QA Testing',
    tags: ['Manual QA', 'Regression Testing', 'Test Cases', 'Figma', 'Google Sheets'],
    categories: ['QA', 'Government', 'Internship'],
    short: 'Performed manual and regression testing for a government-grade waste management web system used by the City of Makati.',
    description: `The Makati Waste Management System (MWMS) is a government web system developed for the Department of Environment Services (DES) of Makati City. It handles waste collection scheduling, environmental clearance, ordinance violations, and user account management across multiple roles including admin, staff, and business owners/taxpayers.\n\nAs a QA tester during my internship at Highly Succeed Inc., I was responsible for writing and executing comprehensive test cases covering the Admin Landing Page, User Management Module, Waste Collection, Environmental Clearance, and Environmental Ordinance Violation modules. I also validated the Figma prototype flows against the actual system behavior.`,
    gallery: ['/mwms-testcase.png', '/mwms-figma.png', '/mwms-accounts.png'],
    purpose: 'To digitize and streamline waste management operations for Makati City government offices.',
    architecture: 'Multi-page web application with role-based access control for admin, staff, and applicant users.',
  },
  {
    title: 'Go Negosyo MBA',
    subtitle: 'Regression Testing & QA',
    tags: ['Manual QA', 'Regression Testing', 'Test Cases', 'Google Sheets'],
    categories: ['QA', 'E-Learning', 'Internship'],
    short: 'Conducted regression testing and test case documentation for Go Negosyo MBA, a government-backed online mentoring and e-learning platform.',
    description: `Go Negosyo MBA (Magandang Business Advice) is a publicly accessible e-learning and mentoring platform backed by Go Negosyo. It supports multiple user roles including mentees, mentors, and admins, with features for course management, mentoring sessions, analytics, and user dashboards.\n\nDuring my internship at Highly Succeed Inc., I performed regression testing and wrote test cases covering the Login, Dashboard, Analytics, Courses, and Mentor Dashboard modules. I also documented bugs and tracked test results using Google Sheets regression sheets, flagging high-priority issues such as incorrect course status after publishing and missing API responses in the analytics section.`,
    gallery: ['/gonegosyo-1.png', '/gonegosyo-2.png', '/gonegosyo-3.png', '/gonegosyo-4.png'],
    purpose: 'To provide Filipino entrepreneurs access to free online mentoring, courses, and business advice through a digital platform.',
    architecture: 'Multi-role web application hosted on Azure with separate dashboards for mentees, mentors, and admins.',
  },
  {
    title: 'Zentive',
    subtitle: 'UI Development & Bug Fixing',
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Bug Fixing', 'UI Development'],
    categories: ['Web Dev', 'SaaS', 'Internship'],
    short: 'Contributed to UI development and bug fixing for Zentive, a field service management SaaS platform for landscaping businesses.',
    description: `Zentive is a field service management platform designed for landscaping businesses. It provides tools for customer management, scheduling, financial management, lead tracking via CRM, and third-party integrations like Mailchimp and QuickBooks.\n\nDuring my internship at Hooli Software, I worked on entry-level frontend tasks including UI development and bug fixing across various modules of the platform. This included working on the Lead Management CRM module, Settings pages, and third-party integration screens such as the Mailchimp integration page — ensuring UI consistency between Figma designs and the actual implementation.`,
    gallery: ['/zentive-1.png', '/zentive-2.png', '/zentive-3.png', '/zentive-4.png'],
    purpose: 'To provide landscaping businesses with an all-in-one platform for managing customers, schedules, finances, and marketing.',
    architecture: 'SaaS web application with modular feature sets, third-party API integrations (Mailchimp, QuickBooks, Stripe), and role-based dashboards.',
  },
];

function ProjectModal({ project, onClose, dark }) {
  const [activeImg, setActiveImg] = useState(0);
  const textMain  = dark ? '#f0f0f0' : '#0f0f1a';
  const textDim   = dark ? '#a0a0a0' : '#6b7280';
  const bg        = dark ? '#111'    : '#ffffff';
  const border    = dark ? '#2a2a2a' : '#e2e2f0';
  const accent    = dark ? '#00e676' : '#4f46e5';
  const tagBg     = dark ? '#1a1a1a' : '#f0f0fc';
  const overlayBg = dark ? '#0d0d0dcc' : '#00000099';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: overlayBg, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40 }}
          onClick={e => e.stopPropagation()}
          style={{ background: bg, borderRadius: '20px', border: `1px solid ${border}`, maxWidth: '780px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 32px 80px #00000040' }}>

          <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: `1px solid ${border}`, borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: textDim, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <FiX />
          </button>

          {/* Main image — contain so portrait shots show fully */}
          <div style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden', height: '420px', background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={project.gallery[activeImg]} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Thumbnails */}
          <div style={{ display: 'flex', gap: '0.6rem', padding: '1rem 1.5rem 0', flexWrap: 'wrap' }}>
            {project.gallery.map((img, i) => (
              <div key={i} onClick={() => setActiveImg(i)}
                style={{ width: '68px', height: '52px', borderRadius: '8px', overflow: 'hidden', border: `2px solid ${i === activeImg ? accent : border}`, cursor: 'pointer', opacity: i === activeImg ? 1 : 0.6, transition: 'all 0.2s', flexShrink: 0, background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>

          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
              {project.categories.map(c => (
                <span key={c} style={{ background: accent, color: dark ? '#0d0d0d' : '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '50px' }}>{c}</span>
              ))}
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: textMain, marginBottom: '0.3rem' }}>{project.title}</h2>
            <p style={{ color: accent, fontSize: '0.82rem', fontFamily: 'Fira Code', marginBottom: '1.2rem' }}>{project.subtitle}</p>

            {project.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ color: textDim, lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '1rem' }}>{para}</p>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.2rem' }}>
              {[{ label: 'PURPOSE', value: project.purpose }, { label: 'ARCHITECTURE', value: project.architecture }].map(item => (
                <div key={item.label} style={{ background: tagBg, borderRadius: '12px', padding: '1rem', border: `1px solid ${border}` }}>
                  <p style={{ color: accent, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '0.5rem' }}>◎ {item.label}</p>
                  <p style={{ color: textDim, fontSize: '0.85rem', lineHeight: 1.6 }}>{item.value}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.2rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: accent, fontSize: '0.75rem', fontFamily: 'Fira Code', background: tagBg, padding: '0.25rem 0.7rem', borderRadius: '6px', border: `1px solid ${border}` }}>
                  <FiTag size={10} />{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Projects() {
  const { dark } = useTheme();
  const [selected, setSelected] = useState(null);

  const bg         = dark ? '#0d0d0d' : '#f8f8fb';
  const accent     = dark ? '#00e676' : '#4f46e5';
  const textMain   = dark ? '#f0f0f0' : '#0f0f1a';
  const textDim    = dark ? '#a0a0a0' : '#6b7280';
  const cardBg     = dark ? '#161616' : '#ffffff';
  const cardBorder = dark ? '#2a2a2a' : '#e2e2f0';
  const tagBg      = dark ? '#1a1a1a' : '#f0f0fc';

  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '5rem 3rem', position: 'relative', zIndex: 1, background: bg, transition: 'background 0.3s' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        style={{ maxWidth: '1100px', margin: '0 auto 3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: textMain, marginBottom: '0.5rem' }}>
          Projects <span style={{ color: accent }}>Showcase</span>
        </h2>
        <p style={{ color: textDim, fontSize: '0.95rem', maxWidth: '500px' }}>
          A curated selection of projects from internships, capstone, and personal work.
        </p>
      </motion.div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {[...projects].sort((a, b) => a.title.localeCompare(b.title)).map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{ background: cardBg, border: `1.5px solid ${cardBorder}`, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px #00000008', transition: 'border-color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = cardBorder}>

            <div style={{ height: '200px', overflow: 'hidden', background: '#0d0d0d', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={p.gallery[0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {p.categories.map(c => (
                  <span key={c} style={{ background: accent, color: dark ? '#0d0d0d' : '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '50px' }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '1.4rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textMain, marginBottom: '0.6rem' }}>{p.title}</h3>
              <p style={{ color: textDim, fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{p.short}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{ color: accent, fontSize: '0.72rem', fontFamily: 'Fira Code', background: tagBg, padding: '0.2rem 0.55rem', borderRadius: '6px' }}>{tag}</span>
                ))}
              </div>

              <button onClick={() => setSelected(p)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: accent, color: dark ? '#0d0d0d' : '#fff', border: 'none', borderRadius: '50px', padding: '0.55rem 1.2rem', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>
                ◎ Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} dark={dark} />}
    </section>
  );
}

export default Projects;