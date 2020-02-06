import React from "react";
import educations from "../data/educations";

const Education = () => (
  <div>
    <h3>Education</h3>
    {educations.map(({ periods, place }, i) => {
      return (
        <div className="portfolio-item" key={i}>
          <strong>&raquo; {place}</strong>
          {periods.map(({ from, to, description }, j) => {
            return (
              <div className="small p-l" key={j}>
                [{from} - {to}] - {description}
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);

export default Education;
