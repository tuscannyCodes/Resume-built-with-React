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
      Hello! I am a Front-end developer that has 2 years of experience designing and building web applications. I enjoy expanding my knowledge and technical resume by contributing to Open Source Projects, creating web designs in Figma, and studying various coding languages at any chance can I get. `,
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
      { text: 'HTML5, CSS3, Bootstrap'},
      { text: 'JavaScript' },
      { text: 'React, JSX' },
      { text: 'Python'},
      { text: 'Responsive Web Design' },
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
      { text: 'Photography' },
      { text: 'Adobe Photoshop' },
      { text: 'Figma'},
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
        name: '2022 Resume', 
        techList: [
          'HTML5',
          'CSS',
          'JavaScript',
          'React js'
          
        ],
        description: `
        This is my updated resume, built using React js!`,
        url: 'https://github.com/tuscannyCodes/Resume-built-with-React',
      },




      {
        name: 'JavaScript Chatbot (view project)', 
        techList: [
          'HTML5',
          'CSS',
          'React js',
          
        ],
        description: `
          This is Hue. I wanted to recreate a 'Siri' like application that serves both as a learning tool for myself, and a personal assistant when coding. I use and work on Hue almost eveyday.`,
        url: 'https://github.com/tuscannyCodes/hueV3',
      },
      {
        name: 'Code For Orlando Website (view project)',
        techList: ['Bootstrap','React js', 'HTML5', 'CSS', 'Photoshop'],
        description: `
          This is a website that I am very proud to be a part of. I helped design and code the Code For Orlando website. Code for Orlando is a brigade of Code for America. We are a volunteer group that meets and finds different ways to help people in our community with code.`,
        url: 'https://codefororlando.com/',
      },

      {
        name: 'Responsive Black and White Website (view project)',
        techList: ['HTML5','CSS', 'React js'],
        description: `
          I built this website with React JS. The design is crisp, spacious and makes great use of bold text and negative space. Smooth, physics based animation between pages is achieved using Framer Motion.`,
        url: 'https://github.com/tuscannyCodes/TuscannyMakesCoolThings',
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
          end: '2018-2020',
        },
        jobTitle: 'Teacher',
        description: `
          Working with students of all grade levels, I provide and follow through lesson plans and manage classroom environment to be conducive to learning and growth of all students.`,
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
          I carry out lesson plans left from teachers and maintain classroom learning environment and predetermined schedule of students.`,
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
        description: 'bachelors Computer Science',
        date: {
          start: '2011',
          end: '2012',
        },
      },
    ],
  },
};

export default data;
