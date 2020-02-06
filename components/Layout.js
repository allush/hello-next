import Footer from "./Footer";
import Head from "next/head";
// import LangSwitcher from "./LangSwitcher";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children, t }) => (
  <>
    <Head>
      <title>Alexey Lushnikov - Software architect</title>

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="yandex-verification" content="430352176a68966d" />

      <meta
        name="description"
        content="Software architect, web engineer, full-stack engineer, programmer, Alexey Lushnikov"
      />
      <meta
        name="keywords"
        content="Software architect, web engineer, full-stack engineer, programmer, Alexey Lushnikov"
      />
      <meta name="author" content="Alexey Lushnikov" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
      />
      <link href="/css/main.css" rel="stylesheet" />

      <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </Head>

    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-1">
          <Sidebar />
        </div>

        <div className="col-md-6 col-sm-6">
          {/*<LangSwitcher />*/}

          <section>{children}</section>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-md-11 col-md-offset-1 col-sm-11 col-sm-offset-1">
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Layout;
