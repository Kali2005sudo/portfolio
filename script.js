/* ============================================================
   QuadraCore Labs — script.js
   All interactive logic, data, and DOM manipulation
   ============================================================ */

'use strict';

/* ── DATA ─────────────────────────────────────────────────── */

const SERVICES = [
  { icon: 'circuit-board',  title: 'DLD / Semester Projects', desc: 'Logic design, simulation, and documentation that pass review.' },
  { icon: 'graduation-cap', title: 'Final Year Projects (FYP)', desc: 'End-to-end delivery with reports, diagrams, and demos.' },
  { icon: 'cpu',            title: 'Arduino & Raspberry Pi', desc: 'Sensor integration, firmware, and embedded control systems.' },
  { icon: 'brain',          title: 'Machine Learning & AI', desc: 'Model training, deployment, and practical AI workflows.' },
  { icon: 'bot',            title: 'IoT & Robotics', desc: 'Connected devices, robotics control, and automation pipelines.' },
  { icon: 'factory',        title: 'Industrial Prototypes', desc: 'Proof-of-concept builds ready for real-world testing.' },
  { icon: 'home',           title: 'Home Automation & Security', desc: 'Smart monitoring, access control, and energy systems.' },
  { icon: 'server',         title: 'Hardware/Software Integration', desc: 'Reliable systems that talk across boards and clouds.' },
  { icon: 'smartphone',     title: 'Mobile App Development', desc: 'Fast, modern apps with clean UI and smooth performance.' },
  { icon: 'globe',          title: 'Web App Development', desc: 'Responsive websites and dashboards built to scale.' },
  { icon: 'database',       title: 'Backend & APIs', desc: 'Secure APIs, database design, and system architecture.' },
  { icon: 'code',           title: 'Python Automation Tools', desc: 'Workflow automation that saves time and reduces errors.' },
  { icon: 'terminal',       title: 'Linux Scripting', desc: 'Deployment scripts and system optimization utilities.' },
  { icon: 'line-chart',     title: 'Data Analysis (Pandas)', desc: 'Insights, reporting, and analytics dashboards.' },
  { icon: 'table',          title: 'Excel Dashboards', desc: 'Interactive sheets and KPI tracking made simple.' },
  { icon: 'file-text',      title: 'Technical Documentation', desc: 'Clear reports, guides, and professional formatting.' },
  { icon: 'presentation',   title: 'Presentation Design', desc: 'Polished, pitch-ready decks and visuals.' },
  { icon: 'lightbulb',      title: 'Custom Innovations', desc: 'Unique builds tailored to your exact needs.' },
];

const PROJECTS = [
  {
    title: 'Learning Management System',
    category: 'Software',
    tech: 'Python + PostgreSQL',
    image: 'images/photo-1516321318423-f06f85e504b3.webp',
    fallbackImage: 'images/photo-1516321318423-f06f85e504b3.jpg',
    width: 1600,
    height: 1067,
    summary: 'A full-stack LMS with role-based access, lesson flows, and analytics dashboards.',
    result: '3x faster onboarding',
  },
  {
    title: 'Smart Home Automation',
    category: 'Hardware + IoT',
    tech: 'Arduino, Sensors',
    image: 'images/photo-1558002038-1055907df827.webp',
    fallbackImage: 'images/photo-1558002038-1055907df827.jpg',
    width: 1600,
    height: 1067,
    summary: 'Multi-sensor automation with secure mobile control and custom rule engine.',
    result: '42% latency drop',
  },
  {
    title: 'Security Monitoring System',
    category: 'IoT + Vision',
    tech: 'Raspberry Pi, OpenCV',
    image: 'images/photo-1557597774-9d273605dfa9.webp',
    fallbackImage: 'images/photo-1557597774-9d273605dfa9.jpg',
    width: 1600,
    height: 1076,
    summary: 'Real-time alerts, anomaly detection, and dashboard monitoring for facilities.',
    result: '99.1% uptime',
  },
  {
    title: 'Solar Company Website',
    category: 'Web Development',
    tech: 'React, Tailwind',
    image: 'images/photo-1508514177221-188b1cf16e9d.webp',
    fallbackImage: 'images/photo-1508514177221-188b1cf16e9d.jpg',
    width: 1600,
    height: 1065,
    summary: 'Conversion-focused redesign with fast performance and SEO-ready structure.',
    result: '+28% leads',
  },
  {
    title: 'Data Analysis Dashboard',
    category: 'Analytics',
    tech: 'Python, Pandas, Plotly',
    image: 'images/photo-1551288049-bebda4e38f71.webp',
    fallbackImage: 'images/photo-1551288049-bebda4e38f71.jpg',
    width: 1600,
    height: 1067,
    summary: 'Automated KPI tracking with rich charts and weekly insights reports.',
    result: '8 hrs saved/week',
  },
  {
    title: 'AI Image Recognition',
    category: 'Machine Learning',
    tech: 'TensorFlow, Neural Networks',
    image: 'images/photo-1620712943543-bcc4688e7485.webp',
    fallbackImage: 'images/photo-1620712943543-bcc4688e7485.jpg',
    width: 1600,
    height: 2000,
    summary: 'Custom model training and deployment pipeline for edge inference.',
    result: '94% accuracy',
  },
];

const TEAM = [
  {
    name: 'Shoaib Javeed',
    role: 'Python Backend Developer',
    focus: 'APIs, automation pipelines, and scalable architecture.',
    image: 'images/shoaib1.webp',
    fallbackImage: 'images/shoaib1.png',
    width: 1024,
    height: 1027,
  },
  {
    name: 'Amara Khan',
    role: 'IoT / Hardware Engineer',
    focus: 'PCB design, embedded firmware, and sensor integration.',
    image: 'images/amara.webp',
    fallbackImage: 'images/amara.jpeg',
    width: 225,
    height: 225,
  },
  {
    name: 'Qasim Liaqat',
    role: 'Web & Mobile Developer',
    focus: 'UI engineering, performance, and product delivery.',
    image: 'images/qasim.webp',
    fallbackImage: 'images/qasim.png',
    width: 1024,
    height: 1024,
  },
  {
    name: 'Muhammad Murtaza',
    role: 'Data Analyst & Docs',
    focus: 'Analytics, reporting, and client-ready documentation.',
    image: 'images/murtaza.webp',
    fallbackImage: 'images/murtaza.jpeg',
    width: 413,
    height: 531,
  },
];

const TESTIMONIALS = [
  {
    quote: 'QuadraCore Labs delivered our IoT prototype ahead of schedule. The hardware integration was flawless and the Python backend handles our data seamlessly.',
    author: 'Tech Startup Founder',
    rating: 5,
  },
  {
    quote: 'Outstanding work on my Final Year Project! The documentation was highly professional, and the code was exceptionally clean and well-structured.',
    author: 'Engineering Student',
    rating: 4,
  },
  {
    quote: 'We needed a custom data analysis dashboard built fast. The team used Pandas and React to build a beautiful, scalable solution that our entire team loves.',
    author: 'Operations Director',
    rating: 5,
  },
  {
    quote: 'Their team rebuilt our web app with better performance and a clean UI. Communication was clear and timelines were respected.',
    author: 'Product Manager',
    rating: 4,
  },
  {
    quote: 'Great support for our hardware prototype and firmware testing. A few iterations were needed, but the final result was solid.',
    author: 'Embedded Systems Lead',
    rating: 3,
  },
];

const REASONS = [
  'Affordable & Scalable Solutions',
  'Lightning Fast Project Delivery',
  'End-to-end Development (Concept to Production)',
  'Deep Hardware + Software Expertise',
  'Professional Documentation Included',
  'Dedicated Support for Students and Businesses',
];

/* ── SVG ICONS ────────────────────────────────────────────── */

const ICONS = {
  'cpu': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  'terminal': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  'arrow-right-sm': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  'arrow-up-right': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  'menu': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  'x': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  'code2': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
  'brain-circuit': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
  'globe': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  'circuit-board': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 6h.01"/><path d="M10 6h.01"/><path d="M14 6h.01"/><path d="M18 6h.01"/><path d="M6 10h.01"/><path d="M18 10h.01"/><path d="M6 14h.01"/><path d="M18 14h.01"/><path d="M6 18h.01"/><path d="M10 18h.01"/><path d="M14 18h.01"/><path d="M18 18h.01"/><path d="M10 10h4v4h-4z"/></svg>`,
  'graduation-cap': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  'brain': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.96-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.12-2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.96-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.12-2z"/></svg>`,
  'bot': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  'factory': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`,
  'home': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  'server': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  'smartphone': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  'database': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  'code': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  'line-chart': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  'table': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`,
  'file-text': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  'presentation': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>`,
  'lightbulb': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  'clock': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  'users': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 11a4 4 0 1 0-8 0"/><path d="M12 15c-4 0-7 2-7 5h14c0-3-3-5-7-5z"/><path d="M19 8a3 3 0 1 0-2.24 5.03"/><path d="M5 8a3 3 0 1 1 2.24 5.03"/></svg>`,
  'layers': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>`,
  'link': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.5 5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.8 13.12a5 5 0 0 0 7.07 7.07L13.5 19"/></svg>`,
  'briefcase': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/></svg>`,
  'building': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`,
  'settings': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  'flask': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4"/><path d="M10 2v6l-5.5 9a3 3 0 0 0 2.6 4.5h9.8a3 3 0 0 0 2.6-4.5L14 8V2"/></svg>`,
  'shield': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z"/></svg>`,
  'lock': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  'monitor': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>`,
  'message': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>`,
  'clipboard': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/></svg>`,
  'folder': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  'git-branch': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  'calendar': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>`,
  'tool': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.7 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.7z"/></svg>`,
  'radio': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M7 8 19 4"/><circle cx="8.5" cy="13" r="1.5"/><path d="M15 12h3"/></svg>`,
  'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  'star': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  'quote': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
  'mail': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  'phone': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.18 2 2 0 0 1 2.96 0H6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  'map-pin': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  'send': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  'loader': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
  'github': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  'check': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  'mail-sm': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  'phone-sm': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.18 2 2 0 0 1 2.96 0H6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
};

const FALLBACK_ICONS = {
  'loader': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
  'check': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  'send': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
};

const icon = (typeof window !== 'undefined' && typeof window.icon === 'function')
  ? window.icon
  : (name) => ICONS[name] || FALLBACK_ICONS[name] || '';

/* ── RENDER FUNCTIONS ─────────────────────────────────────── */

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card anim-fade-scale">
      <div class="service-icon">${icon(s.icon)}</div>
      <div class="service-body">
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <div class="project-card reveal">
      <div class="project-img-wrap">
        <div class="project-overlay"></div>
        <picture>
          <source srcset="${p.image}" type="image/webp" />
          <img src="${p.fallbackImage}" alt="${p.title}" loading="${i === 0 ? 'eager' : 'lazy'}" width="${p.width}" height="${p.height}" />
        </picture>
        <span class="project-category">${p.category}</span>
      </div>
      <div class="project-body">
        <div class="project-arrow">${icon('arrow-up-right')}</div>
        <p class="project-tech">${p.tech}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-footer">
          <span class="project-result">Result: ${p.result}</span>
          <a class="project-link" href="#contact">View Case Study</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = TEAM.map((m, i) => `
    <div class="team-card reveal">
      <div class="team-img-wrap">
        <picture>
          <source srcset="${m.image}" type="image/webp" />
          <img src="${m.fallbackImage}" alt="${m.role}" loading="${i === 0 ? 'eager' : 'lazy'}" width="${m.width}" height="${m.height}" />
        </picture>
        <div class="team-img-overlay"></div>
        <div class="team-role-badge">
          <p>${m.role}</p>
        </div>
      </div>
      <div class="team-body">
        <h3 class="team-name">${m.name}</h3>
        <p class="team-role">${m.role}</p>
        <p class="team-focus">${m.focus}</p>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card anim-fade-scale">
      <div class="quote-icon">${icon('quote')}</div>
      <div class="stars">${'<span class="star">'+icon('star')+'</span>'.repeat(t.rating)}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <p class="testimonial-author">${t.author}</p>
    </div>
  `).join('');
}

function renderReasons() {
  const list = document.getElementById('reasons-list');
  if (!list) return;
  list.innerHTML = REASONS.map(r => `
    <div class="reason-item anim-fade-right">
      <span class="reason-icon">${icon('check-circle')}</span>
      <span class="reason-text">${r}</span>
    </div>
  `).join('');
}

function renderFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

function renderInlineIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (name) {
      el.innerHTML = icon(name);
    }
  });
}

/* ── NAVBAR ───────────────────────────────────────────────── */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon  = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  let menuOpen = false;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    menuIcon.style.display  = menuOpen ? 'none' : 'block';
    closeIcon.style.display = menuOpen ? 'block' : 'none';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuIcon.style.display  = 'block';
      closeIcon.style.display = 'none';
    });
  });
}

/* ── SCROLL ANIMATIONS ────────────────────────────────────── */

function initScrollAnimations() {
  const els = document.querySelectorAll(
    '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-fade-scale'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

function initRevealCards() {
  const cards = document.querySelectorAll('.project-card.reveal, .team-card.reveal');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  cards.forEach(card => observer.observe(card));
}

/* ── COUNTERS ─────────────────────────────────────────────── */

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = Number(el.getAttribute('data-target')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}

/* ── CONTACT FORM ─────────────────────────────────────────── */

function initContactForm() {
  const form  = document.getElementById('contact-form');
  const btn   = document.getElementById('submit-btn');
  const toast = document.getElementById('form-toast');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    // Clear errors
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

    // Validate name
    const name = form.querySelector('#input-name');
    if (!name.value.trim()) {
      form.querySelector('#err-name').classList.add('visible');
      valid = false;
    }

    // Validate email
    const email = form.querySelector('#input-email');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.value.trim())) {
      form.querySelector('#err-email').classList.add('visible');
      valid = false;
    }

    // Validate message
    const message = form.querySelector('#input-message');
    if (!message.value.trim()) {
      form.querySelector('#err-message').classList.add('visible');
      valid = false;
    }

    if (!valid) return;

    btn.disabled = true;
    btn.innerHTML = `${icon('loader')} Sending...`;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      form.reset();
      btn.innerHTML = `${icon('check')} Success`;
      showToast(toast);

      setTimeout(() => {
        btn.innerHTML = `${icon('send')} Send Message`;
      }, 1800);
    } catch (err) {
      btn.innerHTML = 'Failed. Try again';
      setTimeout(() => {
        btn.innerHTML = `${icon('send')} Send Message`;
      }, 2000);
    } finally {
      btn.disabled = false;
    }
  });
}

function showToast(toast) {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ── INIT ─────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderProjects();
  renderTeam();
  renderTestimonials();
  renderReasons();
  renderFooterYear();
  renderInlineIcons();

  // Re-observe after dynamic content is rendered
  requestAnimationFrame(() => {
    initScrollAnimations();
    initRevealCards();
  });

  initNavbar();
  initCounters();
  initContactForm();
});
