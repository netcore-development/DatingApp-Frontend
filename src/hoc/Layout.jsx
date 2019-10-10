import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import Home from "../components/containers/Home/Home";
import Lists from "../components/containers/Lists/Lists";
import Members from "../components/containers/Members/Members";


const Layout = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="container">
        <Switch>
          <Route path="/home" component ={Home}/>
          <Route path='/members' component={Members}/>>
          <Route  path='/lists' component={Lists} />
          <Redirect from="/" exact to='home'/>
        </Switch>
      </main>
    </Fragment>
  );
};

export default Layout;
