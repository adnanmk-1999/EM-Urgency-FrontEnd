import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosConfig from '../../helpers/axiosConfig';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import roleController from '../../helpers/roleLogin';

import './barChart.css'

function BarGraph() {

  if (!roleController.isAdmin()) {
    window.location = '/login'
  }

  const [data, setData] = useState([]);


  useEffect(() => {
    axios(axiosConfig.getConfig('http://localhost:4010/admin/barchart')) //gets data from api
      .then(response => {
        console.log('Promise fullfilled'); //if data recieved, output
        console.log(response.data.data); //display output (responce)
        setData(response.data.data); //save only 'data' in response to the state
      })
      .catch((error) => {
        alert('Session Timed out login again')
        window.location = '/login'
      });
  }, []);



  return (
    <>
      <div className='resHeading'>Response Status</div>
      <ResponsiveContainer width='100%' height={500}>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 30,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis scale='linear' domain={[0, 'dataMax']} />
          <Tooltip />
          <Legend />
          <Bar dataKey="responded" fill="#7ABB67" />
          <Bar dataKey="notResponded" fill="#CA6767" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default BarGraph;