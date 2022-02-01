import React, { useState } from 'react';
import MaterialTable from 'material-table'
import {AddIcon} from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
import BasicButtons from "./button";
// import EmailDropdown from './components/emailDropdown';
function UserResponse() {
  const [responseData, setResponseData] = useState([
    { id : "1", No:"1", date: "2020-04-07", category: "announcement", subject : "Subject 1", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "2", No:"2",  date: "2022-01-10", category: "alert", subject : "Subject 2", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "3", No:"3",  date: "2020-04-07", category: "event", subject : "Subject 3", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "4", No:"4", date: "2020-04-07", category: "announcement", subject : "Subject 4", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "5", No:"5", date: "2020-04-07", category: "event", subject : "Subject 5", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "6", No:"6", date: "2020-04-07", category: "alert", subject : "Subject 6", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "7", No:"7", date: "2020-04-07", category: "announcement", subject : "Subject 7", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "8", No:"8", date: "2020-04-07", category: "announcement", subject : "Subject 8", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "9", No:"9", date: "2020-04-07", category: "event", subject : "Subject 9", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "10", No:"10", date: "2020-04-07", category: "event", subject : "Subject 10", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "11", No:"11", date: "2020-04-07", category: "alert", subject : "Subject 11", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "12", No:"12", date: "2020-04-07", category: "alert", subject : "Subject 12", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "13", No:"13", date: "2020-04-07", category: "announcement", subject : "Subject 13", message: "All employees are requsted to update their pending leaves before 14 Jan"},
    { id : "14", No:"14", date: "2020-04-07", category: "event", subject : "Subject 14", message: "All employees are requsted to update their pending leaves before 14 Jan"}
  ])

  const columns = [
    { title: "No", field: "No", filterPlaceholder: "filter"},
    { title: "Sent Date", type: "date", field: "date", sorting: true, filterPlaceholder: "filter", cellStyle: { background: "#009688" }, headerStyle: { color: "#fff" }, initialEditValue : new Date()}, 
    { title: "Category", field: "category",filterPlaceholder: "filter", lookup: { alert: "Alert", event: "Event", announcement : "Announcement" } },
    { title: "Subject", field: "subject", filterPlaceholder: "filter"},
    { title: "Messsage", field: "message", filterPlaceholder: "filter"}

    
  ]

  // const [state, setState] = useState([])

  const Navigate = useNavigate();

  return (
    <div className="App">
      <h1 align = "center">React-App</h1>
       <MaterialTable
        title="Response"
        columns={columns} 
        data={responseData}
        
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
          paginationPosition: "both", 
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
          headerStyle: { background: "#f44336",color:"#fff"}
        }}

        actions={[

                {
                    icon: 'email',
                    tooltip: 'Sent response',
                    onClick: (event, rowData) => {
                    console.log("row data is", rowData)
                      Navigate('/emaildropdown')              
                    } 
                }                       
              
        
        ]}
          
        
           
        
       
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        
        icons={{ Add: () => <AddIcon /> }} 
        />


        <h2>Content here</h2>
         <BasicButtons/>


      <pre>
        {JSON.stringify(responseData, null, 5)}  
      </pre>


    </div>




  );
}

export default UserResponse;

