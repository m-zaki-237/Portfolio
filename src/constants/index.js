import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I'm a passionate full stack developer with a strong foundation in building robust, real-world web applications. As a Computer Science student with hands-on internship experience, I've developed and deployed full-stack e-commerce solutions, honing my skills in front-end technologies like React.js, and back-end technologies like Node.js, Express.js, and MongoDB. I've also explored state management with Redux Toolkit and Zustand, and built desktop applications with Java. My goal is to keep growing as a developer and create solutions that deliver real value and exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. As a Computer Science student, I've gained hands-on experience through an internship and structured training, working with technologies including React.js, Node.js, Express.js, MongoDB, and Redux Toolkit. My journey in web development began with a deep curiosity for how things work, and it has evolved into a focused pursuit of building real-world, full-stack projects from e-commerce platforms to desktop applications in Java. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to my growth as a developer`;

export const EXPERIENCES = [
  {
    year: "2026 - Present",
    role: "Software Development Intern",
    company: "DevelopersHub Corporation",
    description: `Built and deployed a full-stack MERN e-commerce application with an admin panel for product, order, and inventory management. Planned and executed deployment across Vercel, Render, and MongoDB Atlas, and resolved functional and UI bugs identified during testing.`,
    technologies: ["React.js", "Vite", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB"],
  },
  {
    year: "Dec 2023 - Sep 2024",
    role: "MERN Stack Trainee",
    company: "Saylani Mass IT Training Program",
    description: `Completed a 10-month intensive full-stack web development bootcamp covering MongoDB, Express.js, React.js, and Node.js. Built and deployed multiple real-world web projects, graduating 3rd in the batch.`,
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Web Application",
    image: project1,
    description:
      "A full-stack e-commerce application with product catalog, cart, checkout, and an admin panel for managing products, orders, and inventory. Built during a software development internship.",
    technologies: ["React", "Vite", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB"],
    demo: "https://github.com/m-zaki-237/ecommerce-fullstack-design-internship",
    link: "https://ecommerce-fullstack-design-internsh.vercel.app/"
  },
  {
    title: "Media Gallery App",
    image: project2,
    description:
      "A Pinterest-style masonry image gallery pulling live content from the Unsplash and Pexels APIs, with Redux Toolkit managing search, filtering, and infinite scroll state.",
    technologies: ["React", "Redux Toolkit", "JavaScript"],
    link: "https://github.com/m-zaki-237/redux-toolkit"
  },
  {
    title: "Courier Tracking System",
    image: project3,
    description:
      "A GUI-based courier tracking system with separate login, admin, customer, and agent views, modeling courier, shipment, and delivery entities using core OOP principles.",
    technologies: ["Java", "Java Swing", "OOP"],
    link: "https://github.com/m-zaki-237/CourierMangementSystem"
  }
];