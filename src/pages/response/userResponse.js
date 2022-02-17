import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { AddIcon } from '@material-ui/icons/Add';
import RespondBox from './components/respondBox';
import axios from 'axios';
import axiosConfig from '../../helpers/axiosConfig';
import './userResponse.css';
import roleController from '../../helpers/roleLogin';

function UserResponse() {

  if(!roleController.isUser()){
    window.location = '/login'
  }

  
const [alertData, setalertData] = useState([])

  const columns = [
    { title: "Sent Date", type: "date", field: "date", sorting: true, filterPlaceholder: "filter", headerStyle: { color: "#fff" } },
    { title: "Category", field: "categoryId", filterPlaceholder: "filter", lookup: { 1 : "Alert", 2 : "Event", 3 : "Announcement" } },
    { title: "Subject", field: "subject", filterPlaceholder: "filter" },
    { title: "Messsage", field: "message", filterPlaceholder: "filter" },
    { title: "Reply", field: "response", filterPlaceholder: "filter", lookup: { Pending: "Pending", Yes: "Yes", No: "No" } },
  ]

 //Get alerts 
  useEffect(() => {
    var data = {
      accessToken : localStorage.getItem('accessToken')
    }
    console.log(data)
    axios(axiosConfig.postConfig('http://localhost:4010/users/alerts', data)) //gets data from api
      .then(response => {
        console.log('Promise fullfilled'); //if data recieved, output
        console.log(response.data.data); //display output (responce)
        setalertData(response.data.data); //save only 'data' in response to the state
      })
      .catch((error) => {
        alert('Session Timed out login again')
        window.location ='/login'
      });
  }, []);


  //State to store the message to be displayed in the message box, which is in another component
  const [message, setMessage] = useState();

  const [responseId, setresponseId] = useState();

  const [openDialogue, setOpenDialogue] = useState(false);

  function handleClickOpen(props, event) {
    props.action.onClick(event, props.data);
    setMessage(props.data.message)
    setresponseId(props.data.id)
    setOpenDialogue(true)
  }


  return (
    <>

      {openDialogue && <RespondBox content={message} responseId={responseId} handleClose={() => setOpenDialogue(false)} />}
      <div className="App">

        <MaterialTable
          title="Response"
          columns={columns}
          data={alertData}

          date

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
            headerStyle: { background: "#FC816D", color: "#fff" }
          }}

          actions={[
            
            {
              icon: "reply",
              tooltip: 'Sent response',
              onClick: (data, rowData) => {
                console.log("row data is", rowData)

              }
            }
          ]}

          components={{
            Action: props => (
              <>
                {props.data.response === null && <button type='button' className='respondBoxButton' variant="outlined" onClick={(event) => handleClickOpen(props, event)} >
                  Respond
                </button>
                }
                

              </>
            ),
          }}

          onSelectionChange={(selectedRows) => console.log(selectedRows)}

          icons={{ Add: () => <AddIcon /> }}
        />
      </div>
    </>

  );
}




export default UserResponse;