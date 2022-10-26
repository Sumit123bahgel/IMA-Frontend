import React from 'react';
import Navbar from '../navbar/navbar';
import UserCard from './userCard.js';
import userData from '../../data/userData.js';
import { Input } from '../../components/formComponents';

const User = () => {
  return (
    <>
    <Navbar/>

    <div className='users p-2'>
      
      <div className='d-flex justify-content-between'>
        <h1 className='text-uppercase'>Users</h1>
        <div className='form-group d-flex justify-content-center align-items-center'>
          <Input type='text' placeholder='Search' className='form-control border' />
          <span className='btn btn-dark'>
            <i class="fa-solid fa-magnifying-glass"></i> 
          </span>
        </div>
      </div>
    
      <table className='table table-bordered table-hover table-responsive-lg mt-3'>
        <thead>
          <tr>
            <th scope='col'> User Id </th>
            <th scope='col'> User Name </th>
            <th scope='col'> Email id </th>
            <th scope='col'> Invested </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((card,index)=>{
           return <UserCard
              cardId = {index}
              key = {index}
              user = {card}
           /> 
          })}
        </tbody>
      </table>          

    </div>
    </>
  )
}

export default User;
