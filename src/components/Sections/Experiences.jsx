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
    degree: "Systems Limited (Software Engineer specialty in React JS)",
    content: "Dynamics 365 store front customization in React js",
  },
  {
    id: 3,
    year: "08-2020 - 04-2021",
    degree: "OneClout (Associate Software Engineer)",
    content:
      "Full Time Mern Stack Developer with 8 Months of experience. Major looking Node js with Porstgresql database management.",
  },
  {
    id: 4,
    year: "12-2018 - 08-2020",
    degree: "HashLogics# (Mern Stack Developer)",
    content: "Full Time Mern Stack Developer with 1.5 years of experience.",
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
