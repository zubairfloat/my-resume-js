import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Muhammad",
  aboutMe:
    "I am a highly skilled Full Stack JavaScript Developer with 6 years of experience in the IT industry, primarily focusing on front-end customization as a Microsoft Dynamics 365 developer. Throughout my career, I have demonstrated proficiency in various technologies and frameworks, including ReactJS, Node.js, MongoDB, MySQL, PostgreSQL, Redux, React-TypeScript, React-Strap, CSS3, and SCSS. My expertise as a Microsoft Dynamics 365 developer has allowed me to excel in customizing front-end interfaces, tailoring them to meet specific business needs and user requirements.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/home-back.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">I’m {herosectionData.name}</h1>
        <h1 className="mt-0 mb-4">
          Zubair Rizwan
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
