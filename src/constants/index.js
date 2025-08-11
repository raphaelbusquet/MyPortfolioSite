import {
    summarycomponent,
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
    componentperfum,
    firstsite,
    fiverr,
    gabrielProfilePhoto,
    jhonathanProfilePhoto,
    doutorAgenda,
    imajicoffe,
    RFMsite
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Mobile",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#383E56",
      date: "May 2022 - May 2023",
      points: [
        "Worked on projects for small and medium clients, building user interfaces and responsive layouts optimized for cross-device compatibility. Responsibilities included implementing dynamic components, improving user experiences, and ensuring cross-browser support. Frequently worked with tools such as Angular, React, Next.js, TailwindCSS, and TypeScript to create cohesive and modern front-end solutions."],
    },
    {
      title: "Backend Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#383E56",
      date: "Jun 2023 - Jun 2023",
      points: [
        "Handled backend development tasks including building and maintaining APIs, integrating databases, and supporting overall application architecture. Worked with technologies like .NET (Entity Framework), Node.js, Express, PostgreSQL, and MongoDB. Also used version control systems (GitHub and Bitbucket) and handled deployment and continuous integration processes using Azure and GitHub Actions.",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#383E56",
      date: "Jul 2024 - Current",
      points: [
        "Throughout my recent experience, I've contributed to diverse projects, combining expertise in both front-end and back-end development for web and mobile platforms.",
        "I excel in building responsive user interfaces with technologies like Angular, React, and Next.js, and implementing robust backend solutions using .NET and Node.js. My mobile development experience covers cross-platform frameworks such as React Native, ensuring seamless user experiences across devices.",
        "Also worked in designing and deploying cloud-native applications on Azure, integrating services like App Service, Azure Functions, Cosmos DB, and Azure SQL to drive scalable, secure, and reliable solutions. My approach includes setting up CI/CD pipelines via Azure DevOps and leveraging real-time monitoring and analytics tools for optimal performance. With hands-on experience in API development, database integration (PostgreSQL, MongoDB), and DevOps practices."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Raphael is a technically skilled professional with an entrepreneurial mindset, expertise in modern technologies, and a strong focus on delivering real results. His strategic vision, clear communication, and strong sense of responsibility make him a valuable asset to any tech team.",
      name: "Gabriel Diógenes",
      designation: "UI/UX Specialist",
      company: "Elvend Studio",
      image: gabrielProfilePhoto,
    },
    {
      testimonial:
        "He is a dedicated, communicative developer who is always willing to collaborate with the team. His ability to integrate ideas, design concepts, and business rules showcases his technical expertise and practical mindset.",
      name: "Jhonatan Santana",
      designation: "Frontend Angular Developer",
      company: "Viasoft Korp",
      image: jhonathanProfilePhoto,
    },
  ];
        
  const projects = [
    {
      name: "CRM for Clinics",
      description:
      "A complete system for clinics to use in their scheduling, doctor, patient and payment management. With a graphic dashboard showing the main information, and a modern and responsive design.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "React19",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Lucide",
          color: "blue-text-gradient",
        },
        {
          name: "Drizzle ORM",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: doutorAgenda,
      source_code_link: "https://github.com/raphaelbusquet/doutor-agenda",
    },
    {
      name: "Product Management Dashboard(IMAJI COFFEE)",
      description:
        "An admin dashboard designed for managing products just as an e-commerce platform. The system includes features to list, edit,activate/deactivate, filter, and register new products, with full API integration and a clean, modern UI.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: ".NET",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "JWToken",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: imajicoffe,
      source_code_link: "https://github.com/JhonatanOfficial/fluxng",
    },
    {
      name: "RGFM Website",
      description:
        "Multimedia platform that connects brands and customers through music and radio, enabling direct interaction between customers and creators to foster a space where business meets creation; brands launch interactive radio shows and commission custom audio, creators collaborate and monetize, listeners engage via chat, polls, and voice notes, all supported by built-in licensing and light analytics.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: RFMsite,
      source_code_link: "https://rgfm.com.br/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };