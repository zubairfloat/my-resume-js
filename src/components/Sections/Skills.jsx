import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Full Stack JavaScript Developer with 6 years of experience working as a Microsoft Dynamics 365 developer, specializing in front end customization. I am also a MERN stack developer with a focus on React.",
  progressData: [
    {
      id: 1,
      name: "React",
      percentage: 95,
    },
    {
      id: 2,
      name: "D365 Front End",
      percentage: 90,
    },
    {
      id: 3,
      name: "Node",
      percentage: 80,
    },
    {
      id: 4,
      name: "Type Script",
      percentage: 90,
    },
    {
      id: 5,
      name: "Redux",
      percentage: 90,
    },
    {
      id: 6,
      name: "HTML & CSS",
      percentage: 85,
    },
    {
      id: 7,
      name: "Mongo DB",
      percentage: 80,
    },
    {
      id: 8,
      name: "Next",
      percentage: 90,
    }
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
