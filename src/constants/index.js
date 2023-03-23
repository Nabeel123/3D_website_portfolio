import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "CROWN IT Solutions",
    icon: 'https://picsum.photos/200',
    iconBg: "#383E56",
    date: "July 2015 - April 2019",
    points: [
      "Developing and maintaining web applications using Angular 2, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer (MERN/MEAN)",
    company_name: "Mateeb Tech",
    icon: 'https://picsum.photos/200',
    iconBg: "#E6DEDD",
    date: "May 2019 - Dec 2021",
    points: [
      "React, Angular frontend frameworks",
      "Webpack for module bundlers",
      "GraphQL or REST APIs for communicating with microservices",
      "Web Components or Custom Elements for creating reusable UI components",
      "CSS preprocessors like SASS or LESS for styling",
      "State management libraries like Redux",
      "Testing frameworks like Cypress and Karma",
      "Node.js or another backend language/framework (.NET Core)",
      "Express.js, Koa, or another web framework",
      "Docker, Kubernetes, or other containerization technologies for deployment and scaling",
      "GraphQL or REST APIs for exposing microservices to the frontend",
      "ORM libraries like Sequelize or TypeORM for interacting with databases",
      "Message brokers like RabbitMQ for asynchronous communication between microservices",
      "Testing frameworks like Jest",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Gradvantage",
    icon: 'https://picsum.photos/200',
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "The MEAN stack is a full-stack JavaScript solution that includes MongoDB, Express.js, AngularJS, and Node.js. A developer with 3 years of experience in the MEAN stack will be comfortable with all these technologies and can develop and deploy web applications using the stack.",
      "Amazon Web Services (AWS) is a cloud platform that offers various services for hosting, deploying, and managing web applications. A developer with 3 years of experience with AWS will be familiar with services like EC2, S3, RDS, and Lambda, and can use them to deploy, scale, and monitor web applications.",
      "A MEAN stack with AWS developer will be proficient in using development tools like Git, Jenkins, Docker, and Kubernetes for version control, continuous integration, and deployment",
      "A developer with 3 years of experience will have a good understanding of web application security and how to implement security measures on AWS, such as using AWS Identity and Access Management (IAM), Security Groups, and Virtual Private Clouds (VPCs)",
      "A MEAN stack with AWS developer will have experience working in an Agile environment, including using tools like JIRA and Confluence for project management and collaboration",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
