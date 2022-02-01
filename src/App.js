//Packages for Routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';

//importing components
import AlertTable from "./pages/alertManagement/alertTable";
import EmailDropdown from "./pages/alertManagement/components/emailDropdown";
import PieChart from "./pages/pieChart/pieChart";
import BarChart from "./pages/barChart/barChart";
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
      <div><Link className = "link" to = "/admindashboard">Alert Management</Link></div>
      <div><Link className = "link" to = "/piechart">Pie Chart</Link></div>
      <div><Link className = "link" to = "/barchart">Bar Chart</Link></div>
      <div><Link className = "link" to = "/userdashboard">Response</Link></div>
      <div><Link className = "link" to = "/login">Sign In</Link></div>
      </div>

      <Routes>

        <Route path = "/admindashboard" element = {<AlertTable />}/>
        <Route path = "/emaildropdown" element = {<EmailDropdown />}/>
        <Route path = "/piechart" element = {<PieChart />}/>
        <Route path = "/barchart" element = {<BarChart />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "userdashboard" element = {<UserResponse />}/>


      </Routes>

    </Router>
  );
};

export default App;