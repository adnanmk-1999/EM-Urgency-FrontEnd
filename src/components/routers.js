import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'
import React from 'react';

//Importing components
import HomePage from "../pages/homePage/home";
import NoMatch from "../pages/noMatch/noMatch";
import AlertTable from "../pages/alertManagement/alertTable";
import EmailDropdown from "../pages/alertManagement/components/emailDropdown";
import PieChart from "../pages/pieChart/pieChart";
import BarChart from "../pages/barChart/barChart";
import Login from "../pages/login/loginPage";
import UserResponse from "../pages/response/userResponse";
import AboutUs from "../pages/aboutUs/aboutUs";
import ContactUs from "../pages/contactUs/contactUs";

import Logo from '../images/logo1.png'

function MyRouter(){
    return(
      <Router>

        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="topnav">
          <Container className="container">
            <img className="logo1" src={Logo} alt="logo"></img>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="link"><Link to="/" className="linkLink">Home</Link></Nav.Link>
                <Nav.Link className="link"><Link to="/aboutus" className="linkLink">About</Link></Nav.Link>
                <Nav.Link className="link"><Link to="/admindashboard" className="linkLink">Alert</Link></Nav.Link>
                <Nav.Link className="link"><Link to="/userdashboard" className="linkLink">Response</Link></Nav.Link>
                <Nav.Link className="link"><Link to="/contactus" className="linkLink">Contact</Link></Nav.Link>
                <NavDropdown title="Charts" className="dropNav" id="beautifulThasni">
                  <NavDropdown.Item className="linkItem"><Link className="linkItemContent" to="/piechart">Alert Chart</Link></NavDropdown.Item>
                  <NavDropdown.Item className="linkItem"><Link className="linkItemContent" to="/barchart">Response Chart</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {!localStorage.getItem('accessToken') && <Nav.Link className="link" ><Link to="/login" className="linkLink">Sign In</Link></Nav.Link>}
                {localStorage.getItem('accessToken') && <Nav.Link className="link" ><Link onClick={() => window.location = '/login'} to="/login" className="linkLink">Sign Out</Link></Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/admindashboard" element={<AlertTable />} />
          <Route path="/emaildropdown" element={<EmailDropdown />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/login" element={<Login />} />
          <Route path="userdashboard" element={<UserResponse />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />

        </Routes>

      </Router>
    );
  };

  export default MyRouter;