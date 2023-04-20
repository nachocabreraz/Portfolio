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
    iquall,
    gdg,
    carretino,
    vipets,
    countries,
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
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Lawyer",
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Iquall Networks",
      icon: iquall,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Development of the user-facing features of web applications using React.js, Javascript, HTML and CSS.",
        "Close work with back-end developers, integrating code via Apollo GraphQL and Python.",
        "Use of containerization tools like Docker to build, package and deploy applications.",
        "Use of orchestration tools like Kubernetes to automate deployment, scaling and management of containerized applications.",
      ],
    },
    {
      title: "Associate Lawyer",
      company_name: "GDG Law Firm",
      icon: gdg,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Dec 2021",
      points: [
        "Associate lawyer in charge of cases regarding Labor, Civil and Social Security Law",
      ],
    },
    {
      title: "Paralegal",
      company_name: "Carretino & Associates Law Firm",
      icon: carretino,
      iconBg: "#383E56",
      date: "Aug 2018 - Dec 2019",
      points: [
        "Conducting legal research.",
        "Managing case files.",
        "Assisting with trial preparation.",
      ],
    },
  ];
  
  const testimonials = [
    /* {
      testimonial:
        "comment",
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
    }, */
  ];
  
  const projects = [
    {
      name: "Vipets",
      description:
        "SPA (Single Page Application) with the main purpose of making appointments at different vet clinics. It also includes additional features such as an Emergency section and QR code creator for pets, among others. React was used for the development of the Front-End and Redux was implemented for states handling.Some technologies involved were Sequelize, PostgreSQL, JavaScript, NodeJS, JSON Web Token, React, among others",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: vipets,
      source_code_link: "https://github.com/",
    },
    {
      name: "Countries Web App",
      description:
        "SPA (Single Page Application) development working with React for the Front-End, and Redux as a stage management. Components were developed with pure CSS without the use of external libraries. It consumes data from an API through a Back-End developed in NodeJS using Express, adding new features to the original API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: countries,
      source_code_link: "https://github.com/",
    },
    /* {
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
    }, */
  ];
  
  export { services, technologies, experiences, testimonials, projects };