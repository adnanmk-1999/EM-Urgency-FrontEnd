import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap'
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

import Logo from '../images/logo1.png'



function MyRouter(){
    return(
      <Router>

          <Navbar expand="lg" className="topnav">
          
            <Container className = "container">
              <img className = "logo1" src = {Logo} alt = "logo"></img>
              <Navbar.Brand ></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Link className = "link " to = "/">Home Page</Link>
                    <Link className = "link" to = "/admindashboard">Alert Management</Link>
                    <Link className = "link" to = "/piechart">Pie Chart</Link>
                    <Link className = "link" to = "/barchart">Bar Chart</Link>
                    <Link className = "link" to = "/userdashboard">Response</Link>
                    <Link className = "link" to = "/aboutus">About us</Link>




                    {!localStorage.getItem('accessToken') && <Link className="linkR" to="/login">Sign In</Link>}
                    {localStorage.getItem('accessToken') && <Link className="linkR" onClick={() => window.location = '/login'} to="/login">Sign Out</Link>}
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>

        <Routes>

          <Route path = "/" element = {<HomePage />}/>
          <Route path = "*" element = {<NoMatch />}/>
          <Route path = "/admindashboard" element = {<AlertTable />}/>
          <Route path = "/emaildropdown" element = {<EmailDropdown />}/>
          <Route path = "/piechart" element = {<PieChart />}/>
          <Route path = "/barchart" element = {<BarChart />}/>
          <Route path = "/login" element = {<Login />}/>
          <Route path = "userdashboard" element = {<UserResponse />}/>
          <Route path = "/aboutus" element = {<AboutUs />}/>

  
        </Routes>
  
      </Router>
    );
  };

  export default MyRouter;