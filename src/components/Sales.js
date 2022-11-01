import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';

const Sales = () => {
  
  const data = [
        {
          name: 'Sunday',
          uv: 10000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Monday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Tuesday',
          uv: 2000,
          pv: 9800,
          avg: 2290,
        },
        {
          name: 'Wednesday',
          uv: 2780,
          pv: 3908,
          avg: 2000,
        },
        {
          name: 'Thursday',
          uv: 1890,
          pv: 4800,
          avg: 2181,
        },
        {
          name: 'Friday',
          uv: 2390,
          pv: 3800,
          avg: 2500,
        },
        {
          name: 'Saturday',
          uv: 3490,
          pv: 4300,
          avg: 2100,
        },
      ];
  
  return (
    <div className='w-100 container border border-info p-3 d-flex flex-column gap-3 justify-content-center align-items-center'>
      <h4 className='statement text-center mb-3'>Increase in our weekly Sales</h4>

        {/* Weekly Graph implemented */}
        <ResponsiveContainer width="70%" height={300} className="graph">
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#1098ad" fill="#fab005" />
          </LineChart>
        </ResponsiveContainer>


        <h4 className='statement text-center mb-3'>Our Monthly Stats</h4>

        {/* Monthly Graph implemented */}
         
          <ResponsiveContainer width="70%" height={300} className="graph">
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>


        <h4 className='statement text-center mb-3'>Our Revenue Stats</h4>

        {/* Revenue Graph implemented */}
         <ResponsiveContainer width="70%" height={300} className="graph">
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#d6336c" />
          </AreaChart>
        </ResponsiveContainer>


    </div>
  )
}

export default Sales;
