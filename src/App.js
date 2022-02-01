//Packages for Routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';

//importing components
import Table4 from "./pages/Table4/Table4";
import EmailDropdown from "./pages/Table4/components/emailDropdown";
import PieChart1 from "./pages/PieChart1/PieChart1";
import BarChart1 from "./pages/barChart1/BarChart1";
import Login from "./pages/login/loginPage";
import UserResponse from "./pages/response/userResponse";

function App(){
  return(
    <>
    <MyRouter/>
    </>
  );
};

//Function for Routing
function MyRouter(){
  return(
    <Router>

      <div className = "topnav">
      <div><Link className = "link" to = "/table4">Material Table 1</Link></div>
      <div><Link className = "link" to = "/piechart1">Chart 1</Link></div>
      <div><Link className = "link" to = "/barchart1">Chart 2</Link></div>
      <div><Link className = "link" to = "/login">Sign In</Link></div>
      <div><Link className = "link" to = "/response">Response</Link></div>

      </div>

      <Routes>

        <Route path = "/table4" element = {<Table4 />}/>
        <Route path = "/emaildropdown" element = {<EmailDropdown />}/>
        <Route path = "/piechart1" element = {<PieChart1 />}/>
        <Route path = "/barchart1" element = {<BarChart1 />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/response" element = {<UserResponse />}/>


      </Routes>

    </Router>
  );
};

export default App;