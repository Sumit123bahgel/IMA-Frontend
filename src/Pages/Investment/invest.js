import React from 'react';
import Navbar from '../navbar/navbar';
import investorsData from '../../data/investorsData';
import InvestRow from './investRow';
import { Input } from '../../components/formComponents';


const Investment = () => {
  return (
    <>
    <Navbar/>
    <div className='p-2'>

      <div className='d-flex justify-content-between'>
        <h1 className='text-uppercase'>All Investors</h1>
        <div className='form-group d-flex justify-content-center align-items-center'>
          <Input type='text' placeholder='Search' className='form-control border' />
          <span className='btn btn-dark'>
            <i className="fa-solid fa-magnifying-glass"></i> 
          </span>
        </div>
      </div>

      <table className='table table-bordered table-hover table-responsive-lg mt-3 table-striped'>
        <thead>
          <tr>
            <th scope='col'> User Id </th>
            <th scope='col'> Date </th>
            <th scope='col'> Principal </th>
            <th scope='col'> Plan Type </th>
          </tr>
        </thead>
        <tbody>
          {investorsData.map((card,index)=>{
           return <InvestRow
              key = {index}
              card = {card}
           /> 
          })}
        </tbody>
      </table>  
    </div>
    </>
  )
}

export default Investment
