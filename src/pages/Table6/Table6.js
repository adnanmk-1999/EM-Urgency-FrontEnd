import React, { useState } from 'react';
import MaterialTable from 'material-table';

function Table6() {

    const [tableData, setTableData] = useState([
        { id : "1", date: "2020-04-07", category: "announcement", message: "All employees are requsted to update their pending leaves before 14 Jan"},
        { id : "2", date: "2022-01-10", category: "alert", message: "All employees are requsted to update their pending leaves before 14 Jan"},
        { id : "3", date: "2020-04-07", category: "event", message: "All employees are requsted to update their pending leaves before 14 Jan"},
        { id : "4", date: "2020-04-07", category: "announcement", message: "All employees are requsted to update their pending leaves before 14 Jan"}
      ])
      
    const columns = [
        { title: "ID", field: "id", editable: false}, 
        { title: "Date", type: "date", field: "date"}, 
        { title: "Category", field: "category", lookup: { alert: "Alert", event: "Event", announcement : "Announcement" } },
        { title: "Messsage", field: "message"}
    ]



    return (
      <MaterialTable
        title="Conditional Actions Preview"
        
        data = {tableData}
        columns = {columns}

        options={{
            search : true,
            filtering : false,
            paging : false,
            exportButton : true,
            sorting : true,
            selection : false,
            actionsColumnIndex : -1,
            addRowPosition : "first",
        }}

        editable={{
            //Add operation in the table
            onRowAdd : (newRow) => new Promise ((resolve, reject) => {
              console.log(newRow);
              const updatedRows = [...tableData, newRow];
              setTimeout(() => {
                setTableData(updatedRows);
                resolve();
              },1000)
              resolve();
            }),
  
            //Delete operation in the table
            onRowDelete : (selectedRow) => new Promise ((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...tableData];
              updatedRows.splice(index, 1)
              setTimeout(() => {
                setTableData(updatedRows)
                resolve();
              },1000)
            }),
  
            //Edit operation in the table
            onRowUpdate : (updatedRow, oldRow) => new Promise ((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...tableData]
              updatedRows[index] = updatedRow
              setTimeout(() => {
                setTableData(updatedRows)
                resolve();
              },1000)
            }),
  
            //Bulk edit of table items
            onBulkUpdate : (selectedRows) => new Promise ((resolve, reject) => {
              const rows = Object.values(selectedRows);  //SelectedRows will be in object, and this code transforms it into array (rows) for easy operations
              const updatedRows = [...tableData];
              rows.map(data => {                        //maps through the updated rows
                const index = data.oldData.tableData.id;
                updatedRows[index] = data.newData;
              })
              setTimeout (() => {
                setTableData(updatedRows);
                resolve();
              }, 1000)
            })
          }}

        actions={[
          rowData => ({
            icon: 'mail',
            tooltip: 'Sent Mail',
            onClick: (event, rowData) => alert("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          })
        ]}


      />
    )
  }

  export default Table6;