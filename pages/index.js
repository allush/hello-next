import Conferences from "../components/Conferences";
import Education from "../components/Education";
import Job from "../components/Job";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import React from "react";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

const Index = () => {
  return (
    <Layout>
      <Resume />
      <br />
      <Conferences />
      <br />
      <Portfolio />
      <br />
      <Education />
      <br />
      <Job />
      <br />
      <Skills />
    </Layout>
  );
};

export default Index;
