import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import "./emailDropdown.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import axiosConfig from '../../../helpers/axiosConfig';


function EmailDropdown(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const [check, setCheck] = useState([])
    const [checkLocation, setCheckLocation] = useState([])
    const [sendList, setSendList] = useState([])
    const [option, setOption] = useState({
        value: "0"
    })

    const [data, setData] = useState({ "alertId": location.state.id, "message": location.state.message, "subject": location.state.subject })
    console.log("alertid", data);

    const [tableData, setTableData] = useState([])
    var user = tableData;
    console.log(user)

    useEffect(() => {
        axios(axiosConfig.getConfig('http://localhost:4010/admin/alert')) //gets data from api
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response); //display output (responce)
                setTableData(response.data); //save only 'data' in response to the state
            })
            .catch(() => {
                alert('Session Timed out login again')
            });
    }, []);

    useEffect(() => {
        axios(axiosConfig.getConfig('http://localhost:4010/users')) //gets data from api
            .then(response => {

                //display output (responce)
                setTableData(response.data); //save only 'data' in response to the state
            })
            .catch(() => {
                alert('Session Timed out login again')
            });
    }, [option]);

 
    const columns = [
        { title: 'Avatar', field: 'Image', render: rowData => <img src={rowData.Image} alt="profile" style={{width: 50, borderRadius: '50%'}}/>},
        { title: "Employee Id", field: "Id", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" } },
        { title: "Name", field: "Name", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" } },
        { title: "Email", field: "Email", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" } },
        { title: "Department", field: "department_id", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" }, lookup: { 1 : "DTS", 2 : "ESS", 3: "PES" }},
        { title: "Location", field: "location_id", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" }, lookup: { 1: "Thiruvananthapuram", 2 : "Bengaluru", 3 : "Kochi" } },
        { title: "Job Title", field: "job_title_id", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" }, lookup: { 1: "HR", 2 : "Software Engineer", 3 : "Designer", 4 : "BU" } }
    ]


    function handleSubmit(event) {
        event.preventDefault();
        if (option.value === "0") {
            alert("please select an option");
        }

        else if (option.value === "1") {

            axios(axiosConfig.postConfig(`http://localhost:4010/admin/sentalert/all`, data))
                .then(response => {
                    alert('message send to all users')
                    navigate('/admindashboard')

                })
                .catch(error => {
                    localStorage.clear();
                    if (error.response) {
                        alert(error.response.data.message)  //=> response payload
                    }
                })
        }

        else if (option.value === "2") {
            axios(axiosConfig.postConfig(`http://localhost:4010/admin/sentalert/departments`, data))
                .then(response => {
                    alert('message send to department')
                    navigate('/admindashboard')
                })
                .catch(error => {
                    localStorage.clear();
                    if (error.response) {
                        alert(error.response.data.message)  //=> response payload
                    }
                })
        }
        else if (option.value === "3") {
            axios(axiosConfig.postConfig(`http://localhost:4010/admin/sentalert/locations`, data))
                .then(response => {
                    alert('message send to location')
                    navigate('/admindashboard')
                })
                .catch(error => {
                    localStorage.clear();
                    if (error.response) {
                        alert(error.response.data.message)  //=> response payload
                    }
                })
        }
        else {

            var sendIndividual = {
                ...data, 'individualId': sendList
            }
            axios(axiosConfig.postConfig(`http://localhost:4010/admin/sentalert/individuals`, sendIndividual))
                .then(response => {
                    alert('message send to individual')
                    navigate('/admindashboard')
                })
                .catch(error => {
                    localStorage.clear();
                    if (error.response) {
                        alert(error.response.data.message)  //=> response payload
                    }
                })
        }

    };


    function handleChange(event) {
        const val = event.target.value

        setOption({ value: val })
        setData({ "alertId": data.alertId, "message": data.message, "subject": data.subject, "departmentId": [], "locationId": [] });
    };

    function handleChangeCheckDepartment(event) {
        const val = event.target.value;
        var array = check;
        if (array.includes(val)) {
            array.splice(array.indexOf(val), 1);
            setCheck(array);

            setData(values => ({ ...values, "departmentId": check }))
        }
        else {
            setCheck(values => ([...values, val]))
        }

    };

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {

        setData(values => ({ ...values, "departmentId": check }))
    }, [check])

    function handleChangeCheckLocation(event) {
        const val = event.target.value;
        var arrayLocation = checkLocation;
        if (arrayLocation.includes(val)) {
            arrayLocation.splice(arrayLocation.indexOf(val), 1);
            setCheckLocation(arrayLocation);

            setData(values => ({ ...values, "locationId": checkLocation }))
        }
        else {
            setCheckLocation(values => ([...values, val]))
        }

    };

    useEffect(() => {

        setData(values => ({ ...values, "locationId": checkLocation }))
    }, [checkLocation])


    function individualSendList(list) {
        var sendList = []
        for (var i = 0; i < list.length; i++) {
            var element = list[i].Id
            sendList.push(element);
        }

        setSendList(sendList)
    }

    return (
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
                                                        <input type="checkbox" id="" name="" value="1" className='checkbox' onChange={handleChangeCheckDepartment}></input> &nbsp;
                                                        <label for="" className='departments'>Digital Tranformation Services</label><br />
                                                        <input type="checkbox" id="" name="" value="2" className='checkbox' onChange={handleChangeCheckDepartment}></input> &nbsp;
                                                        <label for="" className='departments'>Product Engineering Services</label><br />
                                                        <input type="checkbox" id="" name="" value="3" className='checkbox' onChange={handleChangeCheckDepartment}></input> &nbsp;
                                                        <label for="" className='departments'>Enterprice Software Services</label><br />
                                                    </div>
                                                    : null
                                            }

                                            {
                                                option.value === "3" ?
                                                    <div className='dept'>
                                                        <label className='location'>Locations: </label>
                                                        <br />
                                                        <input type="checkbox" id="" name="" value="1" className='' onChange={handleChangeCheckLocation}></input> &nbsp;
                                                        <label for="" className='locations'>Thiruvananthapuram</label><br />
                                                        <input type="checkbox" id="" name="" value="2" className='' onChange={handleChangeCheckLocation}></input> &nbsp;
                                                        <label for="" className='locations'>Bengaluru</label><br />
                                                        <input type="checkbox" id="" name="" value="3" className='' onChange={handleChangeCheckLocation}></input> &nbsp;
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
                                                            onSelectionChange={(selectedRows) => { console.log(selectedRows); individualSendList(selectedRows) }}

                                                        />
                                                    </div>
                                                    : null
                                            }

                                            <br />
                                            <button className="goBack" type="button" onClick={handleSubmit}>Send</button> &nbsp;&nbsp;
                                            <button type="button" onClick={() => navigate('/admindashboard')} className='goBack'>Go Back</button>
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
