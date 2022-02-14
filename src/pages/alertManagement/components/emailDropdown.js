import { useNavigate,useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import "./emailDropdown.css";
import {Card, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import axiosConfig from '../../../helpers/axiosConfig';


function EmailDropdown(props) {

    const [option, setOption] = useState({
        value : "0"
    })

    const [data,setData] = useState({props})
    console.log(data);

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
    const location = useLocation();
    console.log(location.state.id);

    function handleSubmit(event){
        event.preventDefault();
        
        if(option.value === "1"){
        
        axios(axiosConfig.postConfig(`http://localhost:4010/admin/sentalert/all`,data))
            .then(response => {
               alert('message send to all users')
            })
            .catch(error =>{
                localStorage.clear();
                if(error.response){
                    alert(error.response.data.message)  //=> response payload
                }
            })
    }};

    
  

    function handleChange (event) {
        const val = event.target.value
        console.log(event.target.value)
        setOption({value : val })
      };

    return(
        <>
            <div className='textImage'>
                <div className='titleEmail'>
                    <Container className='containerDropdown'>
                        <Row >
                            <Col className='columnDropdown'>
                                <Card style={{ width: '100%', background: 'none', border: 'none', padding: '0 0 0 0' }}>
                                    <Card.Body className="email">
                                        <Card.Title className='sendHeader'>Select Users To Send Email</Card.Title><br />
                                        <Card.Text>

                                            <label for="" className='selectBy'>Select by:</label> &nbsp;
                                            <select name="" id="" onChange={handleChange} className="dropDown">
                                                <option value="0" className='optionName'>Select an option</option>
                                                <option value="1" className='optionName'>Select All</option>
                                                <option value="2" className='optionName'>Department</option>
                                                <option value="3" className='optionName'>Location</option>
                                                <option value="4" className='optionName'>Individual</option>
                                            </select>

                                            <br />
                                            <br />

                                            {
                                                option.value === "2" ?
                                                    <div className='dept'>
                                                        <label className='department'>Departments: </label><br />
                                                        <input type="checkbox" id="" name="" value="" className='checkbox'></input> &nbsp;
                                                        <label for="" className='departments'>Digital Tranformation Services</label><br /> 
                                                        <input type="checkbox" id="" name="" value="" className='checkbox'></input> &nbsp;
                                                        <label for="" className='departments'>Product Engineering Services</label><br />
                                                        <input type="checkbox" id="" name="" value="" className='checkbox'></input> &nbsp;
                                                        <label for="" className='departments'>Enterprice Software Services</label><br />
                                                    </div>
                                                    : null
                                            }

                                            {
                                                option.value === "3" ?
                                                    <div className='dept'>
                                                        <label className='location'>Locations: </label>
                                                        <br />
                                                        <input type="checkbox" id="" name="" value="" className=''></input> &nbsp;
                                                        <label for="" className='locations'>Thiruvananthapuram</label><br />
                                                        <input type="checkbox" id="" name="" value="" className=''></input> &nbsp;
                                                        <label for="" className='locations'>Bengaluru</label><br />
                                                        <input type="checkbox" id="" name="" value="" className=''></input> &nbsp;
                                                        <label for="" className='locations'>Kochi</label><br />
                                                    </div>
                                                    : null
                                            }

                                            {
                                                option.value === "4" ?
                                                    <div className='individual'>
                                                        <MaterialTable
                                                            title="Select employees"
                                                            columns={columns}
                                                            data={tableData}
                                                            options={{
                                                                sorting: true,
                                                                search: true,
                                                                searchFieldAlignment: "right",
                                                                searchAutoFocus: true,
                                                                searchFieldVariant: "standard",
                                                                filtering: true,
                                                                paging: true,
                                                                pageSizeOptions: [2, 5, 10, 20, 50, 100],
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
                                                                headerStyle: { background: "#FC816D", color: "#fff" }
                                                            }}
                                                            onSelectionChange={(selectedRows) => console.log(selectedRows)}
                                                        />
                                                    </div>
                                                    : null
                                            }

                                            <br />
                                            <button className="goBack" type="button" onClick={handleSubmit}>Send</button> &nbsp;&nbsp;
                                            <button type="button" onClick={() => Navigate('/admindashboard')} className='goBack'>Go Back</button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
 )
}
export default EmailDropdown;