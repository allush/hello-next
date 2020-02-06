import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15,
};

const Sidebar = () => (
  <header data-spy="affix">
    <img alt="me" className="img-circle" src="/static/images/iam.jpg" />

    <h2>Alexey Lushnikov</h2>
    <h5>Software architect</h5>
    <br />

    <p className="view">
      <img alt="github" src="/static/images/github.png" />
      <a href="https://github.com/allush" target="_blank" rel="nofollow noreferer">
        GitHub
      </a>
    </p>

    <p className="view">
      <img alt="twitter" src="/static/images/twitter.png" />
      <a href="https://twitter.com/alexeylushnikov" target="_blank" rel="nofollow noreferer">
        Twitter
      </a>
    </p>

    <p className="view">
      <img alt="skype" src="/static/images/skype.png" />
      <a href="skype:al.lushnikov" target="_blank">
        al.lushnikov
      </a>
    </p>
  </header>
);

export default Sidebar;
