import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaCoffee,
  FaLaptopCode,
  FaPencilAlt,
  PaletteIcon,
  FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from 'react-icons/fa';

const data = {
  /**
   * Full name
   */
  fullName: 'Tuscanny Polk',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
      Hello! I am a Front-end developer that has 1 year of experience developing web 
      applications and building websites. I am constantly expanding my knowledge by actively contributing to Open Source projects.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'tuscannypolk@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: 'github.com/tuscannyCodes',
        url: 'https://github.com/tuscannyCodes',
        icon: <FaGithub />,
      },
     
      {
        text: '321 695 1009',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Orlando Florida',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'JavaScript' },
      { text: 'React, JSX' },
      { text: 'Responsive Web Design' },
      { text: 'HTML5, CSS3' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
      { text: 'GitHub, Git' },
      { text: 'Node.js' },
      { text: 'CSS-in-JS' },
      { text: 'Photography' },
      { text: 'Adobe Photoshop' },
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'English - Fluent' },
      { text: 'Spanish - Communicative' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'All things creative', icon: <FaPencilAlt /> },
      { text: 'Reading', icon: <FaBook /> },
      { text: 'Drinking coffee', icon: <FaCoffee /> },
     { text: 'Learning new information', icon: <FaLaptopCode /> },
      { text: 'Building positive habits', icon: <FaRegCalendarCheck /> },
     
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'JavaScript AI (view project)', 
        techList: [
          'HTML5',
          'CSS',
          'JavaScript',
          
        ],
        description: `
          This is Hue. I want to recreate a 'Siri' like application that serves both as a learning tool and a peronal assistant when coding. I use and work on Hue almost eveyday.Hue is good for setting reminders and playing background music. He's not bad at light conversations either. Hue is fully responsive.`,
        url: 'https://tuscannycodes.github.io/Javascript_HueAi_V2/',
      },
      {
        name: 'Code For Orlando Website (view project)',
        techList: ['Bootstrap', 'HTML5', 'CSS', 'Photoshop'],
        description: `
          This is a website that I am very proud to be a part of. I built this website for Code For Orlando. Code for Orlando is a brigade of Code for America. We are a voluenteer group that meets and finds diffrent ways to help people in our community with code. We meet a few times a month to discuss current projects. This website is fully responsive. `,
        url: 'https://tuscannycodes.github.io/CFO_Website/',
      },

      {
        name: 'Responsive Solar Website (view project)',
        techList: ['HTML5','CSS', 'Javascript'],
        description: `
          I built this website for a freelance client that needed a new website for their startup solar company. I built the website from scratch using HTML5 CSS and Vanilla Javascript to mirror the look of their business cards. This website is fully responsive.`,
        url: 'https://tuscannycodes.github.io/Responsive-Solar-Company/',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Work experience',
    list: [
      {
        company: 'Orange with County Public Schools',
        location: 'Orlando, Florida',
        date: {
          start: '2017-2019',
          end: '2019-10',
        },
        jobTitle: 'Educator',
        description: `
          Working with students of all grade levels, I provide and follow through lesson plans and manage classroom enviorment to be conducive to learning and growth of all students. In this position, leadership qualities was very important and also the ablity to plan and manage time wisely.`,
      },
      {
        company: 'Kelly Educational Staffing',
        location: 'Orlando, Florida',
        date: {
          start: '2015-2016',
          end: '2016-05',
        },
        jobTitle: 'Substitute Teacher',
        description: `
          I would carry out lesson plans left from teachers and maintain classroom learning enviornment and predetermined schedule of students. This role was great because working at many diffrent schools and with varied classroom enviornments required me to learn to adapt fast and always exercise strong leadership qualities.`,
      },
     
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      
      {
        name: 'Responsive Web Design Certification',
        provider: ' freeCodeCamp',
      },
      
      {
        name: 'Front End Libraries Certification',
        provider: ' freeCodeCamp',
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'Full Sail University ',
        description: 'Computer Science',
        date: {
          start: '2011',
          end: '2012',
        },
      },
    ],
  },
};

export default data;
