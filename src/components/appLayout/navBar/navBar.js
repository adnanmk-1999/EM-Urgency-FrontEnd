import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import React from 'react';
import { Link } from "react-router-dom";
import {useContext} from "react"
import UserContext from '../../../context/userContext';
import roleController from '../../../helpers/roleLogin';

import Logo from "../../../images/logo1.png"

function NavBar(){
  const userContext = useContext(UserContext);
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="topnav">
          <Container className="container">
            <img className="logo1" src={Logo} alt="logo"></img>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="link"><Link to="/" className="linkLink">Home</Link></Nav.Link>
                <Nav.Link className="link"><Link to="/aboutus" className="linkLink">About</Link></Nav.Link>
                <Nav.Link className="link"><Link to="/responses" className="linkLink">Alert Responses</Link></Nav.Link>
                {roleController.isAdmin() && <Nav.Link className="link"><Link to="/admindashboard" className="linkLink">Alert</Link></Nav.Link>}               
                 {roleController.isUser() && <Nav.Link className="link"><Link to="/userdashboard" className="linkLink">Inbox</Link></Nav.Link>}
                { roleController.isAdmin() && <NavDropdown title="Charts" className="dropNav" id="beautifulThasni">
                  <NavDropdown.Item className="linkItem"><Link className="linkItemContent" to="/piechart"> Alert Chart</Link></NavDropdown.Item>
                  <NavDropdown.Item className="linkItem"><Link className="linkItemContent" to="/barchart"> Response Chart</Link></NavDropdown.Item>
                </NavDropdown>}
                {<Nav.Link className="link"><Link to="/contactus" className="linkLink">Contact</Link></Nav.Link>}

              </Nav>
              <Nav>
                {!localStorage.getItem('accessToken') && <Nav.Link className="link" ><Link to="/login" className="linkLink">Sign In</Link></Nav.Link>}
                {userContext.userDetails && <Nav.Link className="link" ><Link onClick={() => {
                    userContext.logout(); window.location = "/login"
                  }} to="/login" className="linkLink">Sign Out</Link></Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBar;