import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table'
import AddIcon from '@material-ui/icons/Add';
import { useNavigate,useHistory} from 'react-router-dom';
import axios from 'axios';
import roleController from '../../helpers/roleLogin';
import Toaster from '../../components/toaster';
import axiosConfig from '../../helpers/axiosConfig';

function AlertTable(props) {

  if(!roleController.isAdmin()){
    window.location = '/login'
  }

  const [tableData, setTableData] = useState([]);
  
  const Navigate = useNavigate();
  const history = useHistory();


  //Get alerts 
  useEffect(() => {
    axios(axiosConfig.getConfig('http://localhost:4010/admin/alert')) //gets data from api
    .then(response => {
      console.log('Promise fullfilled');
      console.log(localStorage.getItem('roles')) //if data recieved, output
      console.log(response); //display output (responce)
      setTableData(response.data); //save only 'data' in response to the state
      })
    .catch(() => {
      alert('Session Timed out login again')
      window.location = '/login'
      });
    },[]);

   const redirectToReport = (rowData) => {
      
      history.push({
        pathname: "/sendemail",
        state: { id: rowData.id } // your row data
      });
    };
    
  const columns = [
    {
      title: "Sent Date", type: "date", field: "date", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" }, initialEditValue: new Date(),
      validate: rowData => {
        if (rowData.date === undefined || rowData.date === "") {
          return "Required"
        }
        return true
      }
    },
    {
      title: "Category", field: "categoryName", filterPlaceholder: "filter", lookup: { Announcement: "Announcement", Event: "Event", Holiday: "Holiday" },
      validate: rowData => {
        if (rowData.categoryName === undefined || rowData.categoryName === "") {
          return "Required"
        }
        return true
      }
    },
    {
      title: "Subject", field: "subject", filterPlaceholder: "filter",
      validate: rowData => {
        if (rowData.subject === undefined || rowData.subject === "") {
          return "Required"
        }
        return true
      }
    },
    {
      title: "Messsage", field: "message", filterPlaceholder: "filter",
      validate: rowData => {
        if (rowData.message === undefined || rowData.message === "") {
          return "Required"
        }
        return true
      }
    },
    {
      title: "Sent Status", field: "statusName",
      render: (rowData) => <div style={{ backgroundColor: rowData.statusName === 'Draft' ? '#2ACAEA' : rowData.status === 'sent' ? '#008000aa' : '#f90000aa', borderRadius: "4px", textAlign: "center", color: 'white' }}>{rowData.statusName}</div>,
      searchable: false, export: false, editable: false
    }
  ]

  return (
    <div className="App">

      <MaterialTable
        title="Alert Information"
        columns={columns} 
        data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([ {...newRow, statusName : "Draft"}, ...tableData])
            setTimeout(() => {
              Toaster.notifyAdd()
              addRow(newRow)
              resolve()
            }, 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => {
              resolve();
              console.log(newRow)
              updateRow(newRow.id, newRow);
              Toaster.notifyEdit();
              }, 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => { 
              resolve();
              deleteRow(selectedRow.id);
              Toaster.notifyDelete();
              }
              , 1000)
          }),
          onRowAddCancelled: () => {Toaster.notifyCancel()},
          onRowUpdateCancelled: () => {Toaster.notifyCancel()}
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
              // Navigate('/sendemail')   
              redirectToReport(rowData);           
            }
          }
        ]}

        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        
        icons={{ Add: () => <AddIcon /> }} 
        />
        <button style = {{width : '100%', color : 'white', backgroundColor: '#EE362D'}}onClick={Toaster.notifyAdd}>Test Toaster</button>

      <pre>
        {JSON.stringify(tableData, null, 5)}  
      </pre>
    </div>
  );
}


//Helper Function for CRUD operations in the alert table
function addRow(data){
  axios(axiosConfig.postConfig('http://localhost:4010/admin/alert', data))
    .then(response => {
      console.log('Promise fullfilled');
      console.log(response);  
  })
}

function deleteRow(id){
  axios(axiosConfig.deleteConfig(`http://localhost:4010/admin/alert/${id}`, id))
    .then(response => {
      console.log('Promise fullfilled');
      console.log(response);  
    })
    .catch(() => {
      console.log("Could not delete")
    })
}

function updateRow(id, data){
  axios(axiosConfig.editConfig(`http://localhost:4010/admin/alert/${id}`, id, data))
    .then(response => {
      console.log('Promise fullfilled');
      console.log(response);  
  })
}

export default AlertTable;
