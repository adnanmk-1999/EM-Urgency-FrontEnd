import React from 'react';
import { useNavigate } from 'react-router-dom';

import './noMatch.css';

function NoMatch() {
    const navigate = useNavigate();
    return (
        <>
            <div className="face">
                <div className="band">
                    <div className="red"></div>
                    <div className="white"></div>
                    <div className="blue"></div>
                </div>
                <div className="eyes"></div>
                <div className="dimples"></div>
                <div className="mouth"></div>
            </div>

            <h1 className='heading'>Oops! Something went wrong!</h1>
            <center><button className="goBack2" onClick={() => navigate('/')}>Return to Home</button></center>
        </>
    );
}

export default NoMatch;