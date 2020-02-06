import React from "react";

const Resume = () => (
  <>
    <h3>Resume</h3>
    <p>I work as a web developer more than 10 years.</p>

    <p>
      I am always in progress, improving my knowledge, using the most efficient program and design
      methods and using up-to-date tools.
    </p>
    <pre>
      <p>Work on Linux.</p>
      <p>Write in: Ruby, Go, JS, PHP.</p>
      <p>Use: Ruby on Rails, ReactJS.</p>
      <p>In everyday work use: Git, Docker.</p>
      <p>Able to perform DevOps tasks.</p>
      <p>Code in IDE.</p>
    </pre>
    <style jsx>{`
      h3 {
        margin-top: 0;
      }
      pre {
        padding: 20px 30px 10px 30px;
      }
    `}</style>
  </>
);

export default Resume;
