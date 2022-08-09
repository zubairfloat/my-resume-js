/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Experience({ experience: { year, degree, content, link } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        <p>{content}</p>
        <a
          href="https://github.com/zubairfloat?tab=repositories"
          target="_blank"
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default Experience;
