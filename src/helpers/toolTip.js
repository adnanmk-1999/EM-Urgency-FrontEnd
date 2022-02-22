import React from 'react';

function CustomTooltip({ active, payload, label }) {

    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <div className="subject">{`${label}`}</div>
                <div className="intro">Message : {payload[0].payload.message}</div>
                <div className="label1">Responded : {`${payload[0].value}`}</div>
                <div className="label2">Unresponded : {`${payload[1].value}`}</div>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;