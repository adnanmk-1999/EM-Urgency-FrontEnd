import React, { useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import roleController from '../../helpers/roleLogin';

function PieGraph() {

  if(!roleController.isAdmin()){
    window.location = '/login'
  }

    const [count] = useState(
        {id : 1, success : 40, fail : 10, pending : 10}
    )


    const [data] = useState([
        { name: "Success", value: count.success, fill: "#88E16E"},
        { name: "Pending", value: count.pending, fill: "#F5E767"},
        { name: "Fail", value: count.fail, fill: "#F66060"}
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