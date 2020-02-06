import Layout from '../components/Layout';
import Resume from "../components/Resume";
import Conferences from "../components/Conferences";
import Portfolio from "../components/Portfolio";
import Job from "../components/Job";
import Skills from "../components/Skills";
import React from "react";
import Education from "../components/Education";

const Index = () => {
    return (
        <Layout>
            <Resume/>
            <br/>
            <Conferences/>
            <br/>
            <Portfolio/>
            <br/>
            <Education/>
            <br/>
            <Job/>
            <br/>
            <Skills/>
        </Layout>
    );
};

export default Index;
