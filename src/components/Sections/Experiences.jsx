import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "04-2021 - Present",
    degree: "Mern Stack (Projects)",
    content: "Different Clients on Market places ",
    link: "https://github.com/zubairfloat?tab=repositories",
  },
  {
    id: 2,
    year: "04-2021 - Present",
    degree: "Systems Limited (Seniour Consultant specialty in React JS)",
    content: "involved in the project life cycle's analysis, Design, Coding and testing, and maintenance phase. Worked on all the new Out of Box features like Business Rules, Business Process Flow, and Synchronous Workflows in MS. 6+ years of strong experience in building e-commerce applications using the JavaScript MERN Stack using Redux, Flux, Common.JS, Babel+ES6, EXT JS, and Web - Pack for Single Page Application development. Expertise in developing web pages using HTMLS5, CSS3, MVC, SASS, LESS, Object Oriented Javascript, ES6, JQuery, AJAX, JSON, and XML. Good understanding of Document Object models (DOM) and DOM Functions.",
  },
  {
    id: 3,
    year: "08-2020 - 04-2021",
    degree: "OneClout (Associate Software Engineer)",
    content:
      "Developed and maintained web applications using React and Next.js, ensuring seamless performance and user experience. Implemented Redux for state management, enabling efficient data flow and centralized state control. Designed and managed MySQL and PostgreSQL databases, optimizing queries for enhanced application speed. Integrated external APIs and payment gateways, enabling smooth transactions and data synchronization.",
  },
  {
    id: 4,
    year: "12-2018 - 08-2020",
    degree: "HashLogics# (Mern Stack Developer)",
    content: "Highly motivated MERN Stack Developer with 1.5 years of experience, proficient in building dynamic and user-friendly web applications. Skilled in utilizing the MERN (MongoDB, Express.js, ReactJS, Node.js) technology stack to create robust and scalable solutions.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
