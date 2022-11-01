import React from 'react'
import Navbar from '../navbar/navbar'
import Cards from '../../components/Cards.js';
import Sales from '../../components/Sales.js';

const Dashboard = () => {
  return (
    <>
      
      <Navbar/>
      <div className='p-2'>
        <h1 className='text-uppercase'>Dashboard</h1>
        <Cards/>
        <Sales/>  
      </div>
      
    </>
  )
}

export default Dashboard
