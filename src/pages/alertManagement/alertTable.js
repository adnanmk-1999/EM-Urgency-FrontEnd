import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table'
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AlertTable() {

  const [tableData, setTableData] = useState([
  //   { id : "1", date: "2020-04-07", category: "announcement", subject : "Subject 1", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "pending"},
  //   { id : "2", date: "2022-01-10", category: "alert", subject : "Subject 2", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "fail"},
  //   { id : "3", date: "2020-04-07", category: "event", subject : "Subject 3", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "4", date: "2020-04-07", category: "announcement", subject : "Subject 4", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "fail"},
  //   { id : "5", date: "2020-04-07", category: "event", subject : "Subject 5", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "6", date: "2020-04-07", category: "alert", subject : "Subject 6", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "7", date: "2020-04-07", category: "announcement", subject : "Subject 7", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "fail"},
  //   { id : "8", date: "2020-04-07", category: "announcement", subject : "Subject 8", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "9", date: "2020-04-07", category: "event", subject : "Subject 9", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "10", date: "2020-04-07", category: "event", subject : "Subject 10", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "11", date: "2020-04-07", category: "alert", subject : "Subject 11", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "fail"},
  //   { id : "12", date: "2020-04-07", category: "alert", subject : "Subject 12", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "fail"},
  //   { id : "13", date: "2020-04-07", category: "announcement", subject : "Subject 13", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"},
  //   { id : "14", date: "2020-04-07", category: "event", subject : "Subject 14", message: "All employees are requsted to update their pending leaves before 14 Jan", status: "sent"}
  ])

  useEffect(() => {

    axios.get('http://localhost:4010/admin/alert') //gets data from api
    .then(response =>{
    console.log('Promise fullfilled'); //if data recieved, output
    console.log(response); //display output (responce)
    setTableData(response.data); //save only 'data' in response to the state
    })
    },[]);
    
    

  const columns = [
    { title: "Sent Date", type: "date", field: "date", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" }, initialEditValue : new Date()}, 
    { title: "Category", field: "category",filterPlaceholder: "filter", lookup: { alert: "Alert", event: "Event", announcement : "Announcement" } },
    { title: "Subject", field: "subject", filterPlaceholder: "filter" },
    { title: "Messsage", field: "message", filterPlaceholder: "filter" },
    {
      title: "Sent Status", field: "status",
      render: (rowData) => <div style={{backgroundColor : rowData.status === 'pending' ? '#2ACAEA' : rowData.status === 'sent' ? '#008000aa' : '#f90000aa', borderRadius:"4px",textAlign:"center", color:'white'}}>{rowData.status}</div>,
       searchable: false, export: false, editable : false
    }
  ]
   useEffect(()=>{
    var config = {
      method: 'get',
      url: 'http://localhost:4010/roles/usercontent',
      headers: { 
        'x-access-token': localStorage.getItem('accessToken')
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
   })
  // const [state, setState] = useState([])

  const Navigate = useNavigate();

  return (
    <div className="App">

      {/* <EmailDropdown data = {state}/> */}

      <MaterialTable
        title="Alert Information"
        columns={columns} 
        data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([ {...newRow, status : "pending"}, ...tableData])
            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}

        options={{
          sorting: true, 
          search: true,
          searchFieldAlignment: "right", 
          searchAutoFocus: true, 
          searchFieldVariant: "standard",
          filtering: true, 
          paging: true, 
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], 
          pageSize: 5,
          paginationType: "stepped", 
          showFirstLastPageButtons: false, 
          paginationPosition: "bottom", 
          exportButton: true,
          exportAllData: true, 
          exportFileName: "TableData", 
          addRowPosition: "first", 
          actionsColumnIndex: -1, 
          selection: false,
          showSelectAllCheckbox: true, 
          showTextRowsSelected: true, 
          // selectionProps: rowData => ({
          //   disabled: rowData.status == "pending",
          //   // color:"primary"
          // }),
          grouping: true, 
          columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#FC816D",color:"#fff"}
        }}

        actions={[
          // {
          //   icon: () => <GetAppIcon />,
          //   tooltip: "Click Me",
          //   onClick: (e, data) => console.log(data),
          //    //isFreeAction:false
          // },
          {
            icon: 'mail',
            tooltip: 'Sent Mail',
            onClick: (event, rowData) => {
              console.log("row data is", rowData)
              Navigate('/emaildropdown')              
            }
          }
        ]}

        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        
        icons={{ Add: () => <AddIcon /> }} 
        />

      <pre>
        {JSON.stringify(tableData, null, 5)}  
      </pre>


    </div>




  );
}

export default AlertTable;
