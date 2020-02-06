import React from "react";
import skills from "../data/skills";

const Skills = () => (
  <div>
    <h3>Skills</h3>

    {skills.map(({ group, items }, i) => {
      return (
        <div className="small" key={i}>
          <div>
            <strong>{group}</strong>:{" "}
            {items.map((item, j) => {
              return (
                <span key={j}>
                  {item}
                  {j === items.length - 1 ? ";" : ", "}
                </span>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

export default Skills;
