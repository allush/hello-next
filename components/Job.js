import React from "react";
import jobs from "../data/jobs";

const Job = () => (
  <div>
    <h3>Job</h3>
    {jobs.map(({ name, positions }, i) => {
      return (
        <div className="portfolio-item" key={i}>
          <strong>&raquo; {name}</strong>
          {positions.map((position, j) => {
            return (
              <div key={j} className="small p-l">
                {position}
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);

export default Job;
