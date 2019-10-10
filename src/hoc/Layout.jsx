import React, { Fragment } from "react";

import Navigation from "../components/Navigation/Navigation";
import Routes from "./Routes";


const Layout = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="container">
        <Routes/>
      </main>
    </Fragment>
  );
};

export default Layout;
