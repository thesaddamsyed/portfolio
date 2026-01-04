// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import eisystemsLogo from "./assets/company_logo/eisystemsLogo.png"

// Education Section Logo's
import sritLogo from './assets/education_logo/sritLogo.png';
import gowthamLogo from "./assets/education_logo/gowthamLogo.jpeg";
import srujanLogo from "./assets/education_logo/srujanLogo.png";
//using a sritLogo.png as image for the  remaining image objects
import fitnessMicroservicesLogo from "./assets/work_logo/fitnessLogo.png";
import weatherAppLogo from "./assets/work_logo/weatherLogo.png";
import todoAppLogo from "./assets/work_logo/todoAppLogo.png";
import customerSegLogo from "./assets/work_logo/customerSegLogo.png";
import pollboxLogo from "./assets/work_logo/sritLogo.png";
import quizInterfaceLogo from "./assets/work_logo/sritLogo.png";
import textUtilsLogo from "./assets/work_logo/textUtilsImg.png";
import chatAppLogo from "./assets/work_logo/chatAppLogo.png";



// Project Section Logo's

export const myName = "Mahammad Rafi Syed";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "C", logo: cLogo },
      { name: "C-Sharp", logo: csharpLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 3,
    img: eisystemsLogo, // import your logo at the top
    role: "Data Science with Python Intern",
    company: "EISystems",
    date: "April 2024 - June 2024",
    desc: "Completed a structured internship in Python and Data Science, starting from foundational programming concepts and progressing towards practical machine learning applications. Designed and implemented a salary prediction model using linear regression, deployed with Streamlit for interactive visualization. Gained experience in handling datasets, performing exploratory data analysis (EDA), and applying statistical methods to extract insights while following industry-standard workflows.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Data Analysis",
      "Linear Regression",
      "Streamlit",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: sritLogo, // replace with actual logo variable if available
    school: "Sai Rajeswari Institute of Technology, Proddatur",
    date: "Nov 2021 - May 2025",
    grade: "8.3 CGPA",
    desc: "I completed my Bachelor's degree (B.Tech) in Computer Science Engineering at Sai Rajeswari Institute of Technology, Proddatur. During my course, I have gained knowledge in Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, and Web Development. I have also been actively involved in building real-world projects and developing a deeper understanding of software engineering principles, which have strengthened my technical and problem-solving abilities.",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
  },
  {
    id: 1,
    img: gowthamLogo, // replace with actual logo variable if available
    school: "Gowtham Junior College, Badvel",
    date: "Jun 2019 - Jul 2021",
    grade: "9.6 GPA",
    desc: "I completed my Class XII (Intermediate) education at Gowtham Junior College, Badvel, under the BIEAP board. My core subjects included Mathematics, Physics, and Chemistry, which helped me build strong analytical and problem-solving skills, laying a solid foundation for my engineering studies.",
    degree: "BIEAP (Class XII) - MPC",
  },
  {
    id: 2,
    img: srujanLogo, // replace with actual logo variable if available
    school: "Sri Srujan High School, Badvel",
    date: "Jun 2018 - Apr 2019",
    grade: "9.5 GPA",
    desc: "I completed my Class X education at Sri Srujan High School, Badvel, under the BSEAP board. My studies covered Science, Mathematics, and Social Sciences, providing me with a well-rounded academic foundation and discipline to pursue higher education.",
    degree: "BSEAP (Class X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Fitness Microservices",
    description:
      "Microservices-based fitness platform that manages users, tracks activities, and generates personalized insights. Designed for scalability and independent service deployment.",
    image: fitnessMicroservicesLogo,
    tags: ["JavaScript", "Microservices", "Node.js", "API", "Docker"],
    github: "https://github.com/thesaddamsyed/fitness-microservices",
    webapp: null,
  },
  {
    id: 1,
    title: "Weather App",
    description:
      "Responsive web app that fetches real-time weather for cities worldwide. Clean UI with accurate conditions and quick city lookups.",
    image: weatherAppLogo,
    tags: ["JavaScript", "HTML", "CSS", "API", "Frontend"],
    github: "https://github.com/thesaddamsyed/Weather-App",
    webapp: null,
  },
  {
    id: 2,
    title: "Todo App with Spring",
    description:
      "Spring Boot–based task manager with full CRUD APIs and clean layered architecture. Built for reliability and maintainability.",
    image: todoAppLogo,
    tags: ["Java", "Spring Boot", "REST API", "Backend"],
    github: "https://github.com/thesaddamsyed/todo-app-with-spring",
    webapp: null,
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Real-time chat using Spring Boot, WebSocket (STOMP over SockJS), and a modern responsive UI. Supports live messaging with connection status and timestamps.",
    image: chatAppLogo,
    tags: ["Java", "Spring Boot", "WebSocket", "Real-time", "STOMP"],
    github: "https://github.com/thesaddamsyed/Chat-Application",
    webapp: null,
  },
  {
    id: 4,
    title: "Customer Segmentation",
    description:
      "Customer segmentation using Python and ML. Processes customer data to uncover clusters and insights for targeted strategies.",
    image: customerSegLogo,
    tags: ["Python", "Machine Learning", "Pandas", "Data Science"],
    github: "https://github.com/thesaddamsyed/customer-segmentation",
    webapp: null,
  },
  // {
  //   id: 5,
  //   title: "Pollbox",
  //   description:
  //     "Java/Spring Boot polling app to create, participate in, and manage polls with real-time tallies and robust backend design.",
  //   image: pollboxLogo,
  //   tags: ["Java", "Spring Boot", "REST API", "Polling"],
  //   github: "https://github.com/thesaddamsyed/pollbox",
  //   webapp: null,
  // },
  // {
  //   id: 6,
  //   title: "Voting App",
  //   description:
  //     "Secure voting platform built with Spring Boot. Implements authentication and result management to ensure vote integrity.",
  //   image: votingAppLogo,
  //   tags: ["Java", "Spring Boot", "Security", "Authentication"],
  //   github: "https://github.com/thesaddamsyed/voting-app",
  //   webapp: null,
  // },
  // {
  //   id: 7,
  //   title: "Quiz Interface",
  //   description:
  //     "Interactive quiz built in JavaScript with multiple question types, scoring, and a user-friendly interface for learning and assessments.",
  //   image: quizInterfaceLogo,
  //   tags: ["JavaScript", "HTML", "CSS", "Frontend"],
  //   github: "https://github.com/thesaddamsyed/quiz-interface",
  //   webapp: null,
  // },
  {
    id: 8,
    title: "Text Utils",
    description:
      "Utility toolkit for common text operations including formatting, analysis, and transformations to boost text workflows.",
    image: textUtilsLogo,
    tags: ["JavaScript", "HTML", "CSS", "Utilities"],
    github: "https://github.com/thesaddamsyed/text-utils",
    webapp: null,
  },
];