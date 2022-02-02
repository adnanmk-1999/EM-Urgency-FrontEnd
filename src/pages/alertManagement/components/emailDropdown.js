import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import "./emailDropdown.css";


function EmailDropdown(props) {

    const [option, setOption] = useState({
        value : "0"
    })

    const [tableData] = useState([
        { id : "1", name: "Adnan", email: "adnan@gmail.com"},
        { id : "2", name: "Adnan", email: "adnan@gmail.com"},
        { id : "3", name: "Adnan", email: "adnan@gmail.com"},
        { id : "4", name: "Adnan", email: "adnan@gmail.com"},
        { id : "5", name: "Adnan", email: "adnan@gmail.com"},
        { id : "6", name: "Adnan", email: "adnan@gmail.com"},
        { id : "7", name: "Adnan", email: "adnan@gmail.com"},
        { id : "8", name: "Adnan", email: "adnan@gmail.com"},
        { id : "9", name: "Adnan", email: "adnan@gmail.com"},
        { id : "10", name: "Adnan", email: "adnan@gmail.com"},
      ])

      const columns = [
        { title: "Name", field: "name", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" }}, 
        { title: "Email", field: "email", filterPlaceholder: "filter"}
      ]
    
    const Navigate = useNavigate();

    function handleChange (event) {
        const val = event.target.value
        console.log(event.target.value)
        setOption({value : val })
      };

    return(
        <>
        <div className='email'>
            <h1>Select Users To Send Email</h1>
            
            <label for="">Select by:</label>
                <select name="" id="" onChange={handleChange}>
                    <option value="0">Select an option</option>
                    <option value="1">Select All</option>
                    <option value="2">Department</option>
                    <option value="3">Location</option>
                    <option value="4">Individual</option>
                </select>
            <br/>
            <br/>

            {
                option.value === "2" ?
                <div>
                    <label>Department: </label>
                    <br/>
                    <input type="checkbox" id="" name="" value=""></input>
                    <label for="">DTS - Digital Tranformation Services</label><br/>
                    <input type="checkbox" id="" name="" value=""></input>
                    <label for="">PES - Product Engineering Services</label><br/>
                    <input type="checkbox" id="" name="" value=""></input>
                    <label for="">ESS - Enterprice Software Services</label><br/>
                </div>
                : null
            }

            {
                option.value === "3" ?
                <div>
                    <label>Location: </label>
                    <br/>
                    <input type="checkbox" id="" name="" value=""></input>
                    <label for="">Thiruvananthapuram</label><br/>
                    <input type="checkbox" id="" name="" value=""></input>
                    <label for="">Bengaluru</label><br/>
                    <input type="checkbox" id="" name="" value=""></input>
                    <label for="">Kochi</label><br/>
                </div>
                : null
            }

            {
                option.value === "4" ?         
                <div>
                    <MaterialTable
                        title = "Select employees"
                        columns = {columns} 
                        data = {tableData}
                        options={{
                            sorting: true, 
                            search: true,
                            searchFieldAlignment: "right", 
                            searchAutoFocus: true, 
                            searchFieldVariant: "standard",
                            filtering: true, 
                            paging: true, 
                            // pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], 
                            pageSize: 5,
                            paginationType: "stepped", 
                            showFirstLastPageButtons: false, 
                            paginationPosition: "bottom",
                            addRowPosition: "first", 
                            actionsColumnIndex: -1, 
                            selection: true,
                            showSelectAllCheckbox: true, 
                            showTextRowsSelected: true, 
                            columnsButton: false,
                            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                            headerStyle: { background: "#FC816D",color:"#fff"}
                            }}
                        onSelectionChange={(selectedRows) => console.log(selectedRows)}
                    />
                </div>
                : null
            }

            <br/>
            <button type = "button">Send</button>
            
            <br/>
            <button type = "button" onClick={() => Navigate('/admindashboard')}>Go Back</button>
            </div>
        </>
        
    )
}

export default EmailDropdown;