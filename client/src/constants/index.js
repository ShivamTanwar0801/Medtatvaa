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
import Main from '../assets/product/diagnostics/main.svg';
import Left from '../assets/product/diagnostics/left.svg';
import Right from '../assets/product/diagnostics/right.svg';
import Step1 from '../assets/product/workflow/step1.png';
import Step2 from '../assets/product/workflow/step2.png';
import Step3 from '../assets/product/workflow/step3.png';
import Step4 from '../assets/product/workflow/step4.png';
import Step5 from '../assets/product/workflow/step5.png';
import Profile from '../assets/about/team/profile.png';

export const navLinks = [
  {
    url: '/resources',
    title: 'Resources',
    id: 'resources',
  },
  {
    url: '/about',
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
        name: 'Sales/ Business Inquiry',
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

export const functionalityCards = [
  {
    id: 'functionality-card-1',
    title: 'Radiologist',
    subText: 'Fast, accurate reporting without jumping between tools',
    points: [
      { id: 'point-1', point: 'AI-generated reports from simple prompts' },
      { id: 'point-2', point: 'Voice-enabled dictation' },
      { id: 'point-3', point: 'Smart templated reports' },
      { id: 'point-4', point: 'Instant access to previous studies' },
    ],
    class1: 'left-1/2 bottom-1/2',
    class2: 'right-1/2 top-1/2 opacity-5',
  },
  {
    id: 'functionality-card-2',
    title: 'Radiology Technician',
    subText: 'Smooth patient flow and clear next steps',
    points: [
      { id: 'point-21', point: 'Automatic worklists' },
      { id: 'point-22', point: 'Instant patient & modality assignment' },
      { id: 'point-23', point: 'Status updates for each scan' },
      { id: 'point-24', point: 'No need to chase down case info' },
    ],
    class1: 'right-1/2 bottom-2/3',
    class2: 'left-1/2 top-1/2 opacity-5',
  },
  {
    id: 'functionality-card-3',
    title: 'Admin / Front Desk',
    subText: 'Easy scheduling, no double entries, fewer mistakes',
    points: [
      {
        id: 'point-31',
        point: 'Smart appointment scheduling with time slot logic',
      },
      { id: 'point-32', point: 'Referral intake and digital forms' },
      { id: 'point-33', point: 'One-click registration' },
      { id: 'point-34', point: 'Fewer handoffs, less paperwork' },
    ],
    class1: 'right-1/2 bottom-2/3',
    class2: 'left-1/2 top-1/2 opacity-5',
  },
  {
    id: 'functionality-card-4',
    title: 'Center Manager',
    subText: 'Efficiency, revenue, visibility',
    points: [
      {
        id: 'point-41',
        point: 'Real-time dashboard of scans, revenue, performance',
      },
      { id: 'point-42', point: 'Report turnaround time tracking' },
      { id: 'point-43', point: 'Technician/radiologist productivity metrics' },
      { id: 'point-44', point: 'No server maintenance, no surprise costs' },
    ],
    class1: 'left-1/2 bottom-1/2',
    class2: 'right-1/2 top-1/2 opacity-5',
  },
];

export const diagnosticCards = [
  {
    id: 'diagnostic-card-1',
    title: 'Beyond Traditional RIS',
    subText:
      'Everything a Radiology Information System should be-modern scheduling, smart worklists, instant report sharing, all in one place.',
    points: [
      { id: 'point-51', point: 'Patient registration & referral intake' },
      { id: 'point-52', point: 'Color-coded scheduling with slot management' },
      { id: 'point-53', point: 'Modality worklist integration (DICOM MWL)' },
      { id: 'point-54', point: 'Technician & radiologist handoffs' },
      { id: 'point-55', point: 'Report generation & delivery tracking' },
      { id: 'point-56', point: 'Role-based user permissions & audit trails' },
    ],
    footerText: 'Designed for radiology workflows, not hospital IT teams.',
    image: Main,
  },
  {
    id: 'diagnostic-card-2',
    title: 'Next-Gen Image Management (MIMPS)',
    subText:
      'High-speed viewing, structured image processing, and central storage across all modalities, accessible anytime, anywhere.',
    points: [
      { id: 'point-61', point: 'Native DICOM viewer (zero-install)' },
      {
        id: 'point-62',
        point: 'Support for CT, MRI, X-ray, ultrasound, and more',
      },
      { id: 'point-63', point: 'Study tagging & structured image grouping' },
      {
        id: 'point-64',
        point: 'Secure cloud storage with long-term archiving',
      },
      { id: 'point-65', point: 'Remote access from any device' },
      { id: 'point-66', point: 'Multi-location image sharing' },
    ],
    footerText:
      'Built to replace your PACS, CD burner, and external drives-all in one.',
    image: Left,
  },
  {
    id: 'diagnostic-card-3',
    title: 'Al-Native. Cloud-First. Built for Scale',
    subText:
      'From automated reporting to infinite storage, experience the intelligence and flexibility your radiology center needs to grow.',
    points: [
      {
        id: 'point-71',
        point: 'Smart reporting templates with Al suggestions',
      },
      { id: 'point-72', point: 'Automated voice-to-text & report structuring' },
      { id: 'point-73', point: 'Real-time case triage and prioritization' },
      { id: 'point-74', point: 'No local servers needed' },
      { id: 'point-75', point: 'Auto-scale storage with built-in redundancy' },
      { id: 'point-76', point: 'Secure by design' },
    ],
    footerText: 'Run your diagnostic center with cloud speed and Al precision.',
    image: Right,
  },
];

export const workflowSteps = [
  {
    id: 'step-1',
    title: 'A patient walks in',
    subTitle: 'Registration and scheduling happen in seconds',
    image: Step5,
  },
  {
    id: 'step-2',
    title: 'A scan is performed',
    subTitle: 'Images appear instantly in the cloud viewer',
    image: Step1,
  },
  {
    id: 'step-3',
    title: 'A radiologist reads',
    subTitle: 'AI reporting and voice dictation speed up reporting',
    image: Step2,
  },
  {
    id: 'step-4',
    title: 'A report is shared',
    subTitle: 'Doctors and patients receive it instantly, no logins needed',
    image: Step3,
  },
  {
    id: 'step-5',
    title: 'A manager checks',
    subTitle: 'Real-time dashboards show performance and revenue',
    image: Step4,
  },
];

export const faqAccordion = [
  {
    question: 'How is DICOMDrive different from a traditional RIS-PACS?',
    answer:
      'Traditional RIS-PACS systems are fragmented, server-heavy, and often outdated. DICOMDrive is cloud-native, AI-powered, and designed to bring scheduling, imaging, reporting, and analytics into a single seamless platform.',
    id: 'accordion-1',
  },
  {
    question: 'Is DICOMDrive secure and compliant with healthcare regulations?',
    answer:
      'Yes. DICOMDrive uses end-to-end encryption, role-based access controls, and automated redundancy to keep patient data safe and accessible. We’re built to align with international healthcare data protection standards.',
    id: 'accordion-2',
  },
  {
    question:
      'Does DICOMDrive work for small diagnostic centers as well as larger hospitals?',
    answer:
      'Absolutely. Whether you’re a single-site clinic or a multi-location network, DICOMDrive scales effortlessly. Smaller centers benefit from low setup costs, while larger enterprises gain centralized workflows and unlimited scalability.',
    id: 'accordion-3',
  },
  {
    question: 'How does AI actually help radiologists in DICOMDrive?',
    answer:
      'Radiologists can prompt DICOMDrive’s AI to auto-generate reports, use voice-enabled dictation, and rely on smart templates for faster, more consistent reads. AI also supports case triage, prioritization, and workflow optimization.',
    id: 'accordion-4',
  },
  {
    question:
      'Do we need servers or on-premise infrastructure to run DICOMDrive?',
    answer:
      'No. DICOMDrive is fully cloud-native, which means zero local servers, no VPN headaches, and instant access from anywhere.',
    id: 'accordion-5',
  },
  {
    question: 'How long does it take to get started?',
    answer:
      'Implementation is fast and straightforward. Most centers are up and running within a few hours — without heavy IT involvement.',
    id: 'accordion-6',
  },
  {
    question: 'Can patients and referring doctors access reports easily?',
    answer:
      'Yes. Patients and doctors receive shareable links via SMS or email with no logins required. This makes report access instant and frustration-free.',
    id: 'accordion-7',
  },
  {
    question: 'What happens if our internet goes down?',
    answer:
      'DICOMDrive supports a hybrid model with both cloud and on-premise options. For centers with unreliable internet, our team can walk you through the setup and recommend the best approach for uninterrupted operations.',
    id: 'accordion-8',
  },
  {
    question: 'Is there a free trial or demo available?',
    answer:
      'Yes. You can request a live demo or start a free trial to experience DICOMDrive before committing.',
    id: 'accordion-9',
  },
  {
    question: 'How does pricing work?',
    answer:
      'We offer transparent, pay-per-use pricing with no hidden fees or costly maintenance contracts. You only pay for what you use.',
    id: 'accordion-10',
  },
];

export const missionSteps = [
  {
    id: 'mission-step-1',
    title: 'Our Mission',
    desc: 'To rebuild the infrastructure of diagnostics with modern technology that unifies workflows and enables radiology teams to deliver care with greater speed, precision, and collaboration.',
  },
  {
    id: 'mission-step-2',
    title: 'Our Vision',
    desc: 'To empower radiologists with tools that elevate their expertise and to ensure every patient’s scan leads to faster answers and better care.',
  },
];

export const profiles = [
  {
    id: 'profile-1',
    image: Profile,
    name: 'Dr. Naman Modi',
    designation: 'Designation',
  },
  {
    id: 'profile-2',
    image: Profile,
    name: 'Dr. Naman Modi',
    designation: 'Designation',
  },
  {
    id: 'profile-3',
    image: Profile,
    name: 'Dr. Naman Modi',
    designation: 'Designation',
  },
  {
    id: 'profile-4',
    image: Profile,
    name: 'Dr. Naman Modi',
    designation: 'Designation',
  },
];
