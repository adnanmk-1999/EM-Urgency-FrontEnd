//Packages for Routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';

//importing components
import Table1 from './pages/Table1/Table1';
import Table2 from "./pages/Table2/Table2";
import Table3 from "./pages/Table3/Table3";
import Table4 from "./pages/Table4/Table4";
import Table5 from "./pages/Table5/Table5";
import Table6 from "./pages/Table6/Table6";
import EmailDropdown from "./pages/Table4/components/emailDropdown";
import PieChart1 from "./pages/PieChart1/PieChart1";
import BarChart1 from "./pages/barChart1/BarChart1";

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
      <div><Link className = "link" to = "/table1">Table1</Link></div>
      <div><Link className = "link" to = "/table2">Table2</Link></div>
      <div><Link className = "link" to = "/table3">Table3</Link></div>
      <div><Link className = "link" to = "/table4">Material Table 1</Link></div>
      <div><Link className = "link" to = "/table5">Material Table 2</Link></div>
      <div><Link className = "link" to = "/table6">Material Table 3</Link></div>
      <div><Link className = "link" to = "/piechart1">Chart 1</Link></div>
      <div><Link className = "link" to = "/barchart1">Chart 2</Link></div>
      </div>

      <Routes>

        <Route path = "/table1" element = {<Table1 />}/>
        <Route path = "/table2" element = {<Table2 />}/>
        <Route path = "/table3" element = {<Table3 />}/>
        <Route path = "/table4" element = {<Table4 />}/>
        <Route path = "/table5" element = {<Table5 />}/>
        <Route path = "/table6" element = {<Table6 />}/>
        <Route path = "/emaildropdown" element = {<EmailDropdown />}/>
        <Route path = "/piechart1" element = {<PieChart1 />}/>
        <Route path = "/barchart1" element = {<BarChart1 />}/>


      </Routes>

    </Router>
  );
};

export default App;