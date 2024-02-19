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
    upwork,
    itea,
    sevene,
    wordpress,
    windplast,
    vartwind,
    portfolio,
    threejs,
    vartan,
    mark,
    avraham
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "JavaScript Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "WordPress Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      title: "Wordpress Developer",
      company_name: "Freelancer",
      icon: wordpress,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "I developed my first website on Wordpress - online store for the company selling metal-plastic windows - windplast.com.ua"
      ],
    },
    {
      title: "Frontend Developer JS",
      company_name: "ITEA Academy",
      icon: itea,
      iconBg: "#383E56",
      date: "October 2022 - March 2023",
      points: [
        "Learning HTML, CSS, JavaScript, JavaScript, jQuery, Bootstrap, SCSS"
      ],
    },
    {
      title: "React JS Developer",
      company_name: "7E Education Academy",
      icon: sevene,
      iconBg: "#E6DEDD",
      date: "March 2023 - May 2023",
      points: [
        "Learning React JS, Redux Toolkit, Tailwind CSS"
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "UpWork Freelancer",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Development and support of websites on Wordpress using Elementor."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I recommend, I am satisfied with the work done. My website looks modern and brings in a lot of new customers.",
      name: "Vartan K",
      designation: "CEO",
      company: "VartWind",
      image: vartan,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Viacheslav does.",
      name: "Mark B",
      designation: "Digital Optimization Lead",
      company: "Lendo",
      image: mark,
    },
    {
      testimonial:
        "After Viacheslav optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Avraham M",
      designation: "CEO",
      company: "Kiki VP",
      image: avraham,
    },
  ];
  
  const projects = [
    {
      name: "Online Store",
      description:
        "An online store that allows users to buy metal plastic windows.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
      ],
      image: windplast,
      source_code_link: "https://windplast.com.ua/",
    },
    {
      name: "Landing Page",
      description:
        "Landing page for a company selling metal plastic windows.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "elementor",
          color: "pink-text-gradient",
        },
      ],
      image: vartwind,
      source_code_link: "https://vartwind.com.ua/",
    },
    {
      name: "My Portfolio",
      description:
        "My portfolio developed on React JS, Three JS, Tailwind CSS.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  