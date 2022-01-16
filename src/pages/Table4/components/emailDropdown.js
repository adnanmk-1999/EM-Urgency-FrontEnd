import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function EmailDropdown(props) {

    const Navigate = useNavigate();

    console.log("component",props.data)

    return(
        <>
            <h1>Heading</h1>
            <button type = "button" onClick={() => Navigate('/table4')}>Go Back</button>
        </>
        
    )
}

export default EmailDropdown;