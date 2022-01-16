import {useState} from 'react';
import React from 'react';

function Table1() {

    const [inputList, setInputList] = useState([
      {firstName : "", lastName : "", middleName : ""}
    ]);
  
    const handleChange = (event, index) => {
      const {name, value} = event.target;
  
      const list = [...inputList];
      list[index][name] = value;
  
      setInputList(list);
    };
  
    const handleAddInput = () => {
      setInputList([...inputList, {firstName : "", lastName : "", middleName : ""}]);
    };
  
    const handleRemoveInput = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
  
    return (
      <>
      <div className = 'addButton'>
        <input type = "button" value = "Add" onClick = {handleAddInput}></input>
      </div>
      
      {inputList.map((item, i) => {
        return(
          <div key = {i} className='App'>
            <br/>
            <input type = "text" name = "firstName" placeholder= "firstName" value = {item.firstName} onChange = {e => handleChange(e, i)}></input>
            &nbsp;
            <input type = "text" name = "lastName" placeholder= "lastName" value = {item.lastName} onChange = {e => handleChange(e, i)}></input>
            &nbsp;
            <input type = "text" name = "middleName" placeholder= "middleName" value = {item.middleName} onChange = {e => handleChange(e, i)}></input>
            &nbsp;
  
            {inputList.length !== 1 && <input type = "button" value = "Delete" onClick = {() => handleRemoveInput(i)}></input>}
            &nbsp;
            
          </div>
        )
      })} 
  
      <pre>
        {JSON.stringify(inputList, null, 5)}  
      </pre>
            
      </>
    );
  }

  export default Table1;