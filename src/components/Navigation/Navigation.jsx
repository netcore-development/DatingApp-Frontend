import React, { Fragment } from "react";
import {
  Collapse,
  NavbarToggler,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from "reactstrap";
//Para realizar el linkeo
// Para temas de estilos se usa NavLink
// Para  linkeo simple  se usa Link
// Ya que nuestro  componente es de Reactstrap y queremos usar los estilos de bootstrap usamos NavLink
import {NavLink as NavLinkRouter} from 'react-router-dom';

const Navigation = () => {
  let toolbarMenu = null;
  toolbarMenu = (
    <Nav navbar>
        <NavItem>
            <NavLink tag={NavLinkRouter} exact to='/members'>
                Matches
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={NavLinkRouter} exact to='/lists'>
                Lists
            </NavLink>
        </NavItem>
    </Nav>
  );

  return (
    <Fragment>
      <Navbar
        className="navbar navbar-expand-md navbar-dark bg-primary"
        light
        expand="md"
      >
        <NavbarBrand tag={NavLinkRouter} exact to='/'>FindYourMatch.com</NavbarBrand>
        <NavbarToggler></NavbarToggler>
        <Collapse navbar>{toolbarMenu}</Collapse>
        {"userInfoArea"}
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
