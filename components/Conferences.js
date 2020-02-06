import React from "react";

const Conferences = () => (
  <div>
    <h3>Conferences</h3>
    <p>
      Conference participant{" "}
      <a href="https://techweek.moscow/" target="_blank" rel="noreferrer nofollow">
        Russian blockchain week 2018
      </a>
      ,{" "}
      <a href="https://2016.codefest.ru/" target="_blank" rel="noreferrer nofollow">
        CodeFest 2016
      </a>
      ,{" "}
      <a href="http://secon.ru/" target="_blank" rel="noreferrer nofollow">
        SECON 2013-2020
      </a>
      ,{" "}
      <a href="https://rubyrussia.club/" target="_blank" rel="noreferrer nofollow">
        Rails Club 2016
      </a>
      .
    </p>

    <img className="img-round" alt="team" src="/static/images/team.jpg" />
  </div>
);

export default Conferences;
