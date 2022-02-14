import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';

import NavBar from "../components/appLayout/navBar/navBar";

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



function RouterIndex(){

    return(
        <>
            <Router>

                <NavBar />

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
        </>
    );
}

export default RouterIndex;