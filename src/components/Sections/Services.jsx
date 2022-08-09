import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content:
      "Customized modules written in javascript with ES6 , ES7. Make Reuse able components ",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content:
      "Convert Figma to React & HTMl & CSS, Pixel Perfect Design with mobile Responsive",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content:
      "Bootstrap 5 and React, Clean & Modern Design Personal Portfolio, React Digital Agency",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content:
      "SEO Digital Marketing Agency Theme and Marketing & Social Media, SEO Consulting Agency",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Support",
    content: "Any Time available for resolve any issue related my work.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
