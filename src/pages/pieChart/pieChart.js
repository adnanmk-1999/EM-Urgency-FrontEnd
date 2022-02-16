import React, { useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import roleController from '../../helpers/roleLogin';

function PieGraph() {

  if(!roleController.isAdmin()){
    window.location = '/login'
  }

    const [count] = useState(
        {Sent : 40, Failed : 10, Draft : 10}
    )


    const [data] = useState([
        { name: "Success", value: count.Sent, fill: "#88E16E"},
        { name: "Draft", value: count.Draft, fill: "#F5E767"},
        { name: "Failed", value: count.Failed, fill: "#F66060"}
    ])

    return (
        <>
        <ResponsiveContainer width= '100%' height={600}>
        <PieChart>
        <Pie  
          dataKey="value" 
          isAnimationActive={true}
          data={data}
          cx='50%'
          cy={300}
          outerRadius={200}
          label
        />
        <Tooltip />
        <Legend />
        </PieChart>
        </ResponsiveContainer>
        </>
      );
}

export default PieGraph;