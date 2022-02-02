import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function BarChart1(){

    const [data] = useState([
        { name: "Christmas", NotResponded: 30, Responded: 35 },
        { name: "Subject 2", NotResponded: 46, Responded: 23 },
        { name: "Subject 3", NotResponded: 43, Responded: 21 },
        { name: "Subject 4", NotResponded: 35, Responded: 22 },
        { name: "Subject 5", NotResponded: 46, Responded: 23 },
        { name: "Subject 6", NotResponded: 35, Responded: 32 },
        { name: "Subject 7", NotResponded: 45, Responded: 32 }
      ]);

    return (
        <ResponsiveContainer width= '100%' height={500}>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 30,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis scale='linear' domain={[0, 'dataMax + 10']} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Responded" fill="#7ABB67" />
          <Bar dataKey="NotResponded" fill="#CA6767" />
        </BarChart>
        </ResponsiveContainer>
      );
}

export default BarChart1;