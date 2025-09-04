import Patients from '../assets/workflows/patients.png';
import Report from '../assets/workflows/report.png';
import Scan from '../assets/workflows/scan.png';
import Radio1 from '../assets/radiology/radio1.png';
import Radio2 from '../assets/radiology/radio2.png';
import Radio3 from '../assets/radiology/radio3.png';
import Radio4 from '../assets/radiology/radio4.png';
import Radio5 from '../assets/radiology/radio5.png';
import Radio6 from '../assets/radiology/radio6.png';
import Trending from '../assets/numbers/trending.svg';
import Smiley from '../assets/numbers/smiley.svg';
import Lightning from '../assets/numbers/lightning.svg';
import Coins from '../assets/numbers/coins.svg';
import Document from '../assets/numbers/document.svg';

export const navLinks = [
  {
    url: '/resources',
    title: 'Resources',
    id: 'resources',
  },
  {
    url: '#about',
    title: 'About Us',
    id: 'about-us',
  },
  {
    url: '/contact',
    title: 'Contact Us',
    id: 'contact-us',
  },
  { url: '/#login', title: 'Login', id: 'login', onlyMobile: true },
];

export const products = [
  { url: 'https://dicomdrive.com/', title: 'DICOMDrive', id: 'product-1' },
];

export const legacyPoints = [
  'On-premise, rigid setup',
  'Disconnected tools for scheduling, viewing, reporting',
  'Accessible only onsite or via complex VPN',
  'Difficult and costly to scale',
  'Minimal or no AI features',
  'Heavy IT dependency and maintenance',
  'High upfront costs and hidden fees',
  'Outdated, clunky user interface',
];

export const dicomDrivePoints = [
  'Cloud native, flexible, zero hardware',
  'Unified platform with scheduler, worklist, viewer, reporting, storage',
  'Accessible anytime, anywhere',
  'Effortless scale across locations and teams',
  'AI native with smart workflows and automation',
  'Fully managed, zero maintenance infrastructure',
  'Transparent, pay-per-use pricing',
  'Fast, modern interface built for radiologists',
];

export const workflows = [
  {
    id: 'workflow-1',
    image: Patients,
    title: 'Patient Flow Management',
    subtitle: 'From physician orders to scan scheduling',
    text: 'Turn referral requests into optimized schedules that maximize technologist productivity and patient throughput.',
  },
  {
    id: 'workflow-2',
    image: Scan,
    title: 'Image Processing & Diagnosis',
    subtitle: 'Complete imaging workflow with AI tools',
    text: 'Handle studies from scan to final read with cloud storage and enhanced diagnostic tools.',
  },
  {
    id: 'workflow-3',
    image: Report,
    title: 'Report Delivery & Performance',
    subtitle: 'Automated distribution with insights',
    text: 'Deliver reports efficiently while tracking department performance and quality metrics.',
  },
];

export const radiologyCards = [
  {
    id: 'radio-1',
    image: Radio1,
    title: 'Scheduling and Modality Worklist',
  },
  {
    id: 'radio-2',
    image: Radio2,
    title: 'Image Acquisition and Cloud Storage',
  },
  {
    id: 'radio-3',
    image: Radio3,
    title: 'Image Viewing',
  },
  {
    id: 'radio-4',
    image: Radio4,
    title: 'Diagnosis and Reporting',
  },
  {
    id: 'radio-5',
    image: Radio5,
    title: 'Report Distribution and Communication',
  },
  {
    id: 'radio-6',
    image: Radio6,
    title: 'Analytics',
  },
];

export const numberCards = [
  {
    id: 'number-card-1',
    icon: Trending,
    title: '90%',
    heading: 'Faster Report Turnaround',
    subHeading: 'From hours to minutes.',
    text: 'AI-assisted reporting and structured workflows slash delays—so diagnostics move at the speed of need.',
  },
  {
    id: 'number-card-2',
    icon: Smiley,
    title: '75%',
    heading: 'Drop in Patient Complaints',
    subHeading: 'Fewer calls, happier patients',
    text: 'Instant access to reports and real-time updates improve patient trust and reduce follow-up chaos.',
  },
  {
    id: 'number-card-3',
    icon: Lightning,
    title: '50%',
    heading: 'Boost in Radiologist Productivity',
    subHeading: 'More scans, less fatigue.',
    text: 'Smarter worklists, voice dictation, and AI tools help radiologists do more with fewer clicks.',
  },
  {
    id: 'number-card-4',
    icon: Coins,
    title: '₹7–10 Lakh',
    heading: 'Saved Annually',
    subHeading: 'No more film, CDs, or courier chaos.',
    text: 'Go fully digital and eliminate recurring costs tied to printing, storage media, and manual delivery.',
  },
  {
    id: 'number-card-5',
    icon: Document,
    title: '30%',
    heading: 'Less Admin Overhead',
    subHeading: 'Let your staff focus on care, not clerical work.',
    text: 'AI-assisted reporting and structured workflows slash delays—so diagnostics move at the speed of need.',
  },
];

export const footerLinks = [
  {
    title: 'Home',
    links: [
      {
        name: 'Our Solutions',
        link: '',
      },
      {
        name: 'Our Workflow',
        link: '',
      },
    ],
  },
  {
    title: 'Products',
    links: [
      {
        name: 'DicomDrive',
        link: '',
      },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      {
        name: 'Sales/ BusinessInquiry',
        link: '',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'Coming Soon',
        link: '',
      },
    ],
  },
  {
    title: 'About Us',
    links: [
      {
        name: 'Our Story',
        link: '',
      },
      {
        name: 'Mission & Vision',
        link: '',
      },
      {
        name: 'The Team',
        link: '',
      },
      {
        name: 'Investors & Advisors',
        link: '',
      },
      {
        name: 'Careers',
        link: '',
      },
    ],
  },
];
