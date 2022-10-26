import React from 'react';
import Navbar from '../navbar/navbar';
import UserCard from './userCard.js';
import userData from './userData.js';
import { Input } from '../../components/formComponents';

const User = () => {
  return (
    <>
    <Navbar/>
    <div className='users p-2'>
      
      <h1 className='text-uppercase text-center'>All users</h1>

      <div className='d-flex my-3'>
        <h3>Search</h3>

        <Input type="text" name="search_user" placeholder='Search for a user'  className='form-control mx-2'/>
        
      </div>

      <div>

        <div className='d-flex justify-content-center flex-column'>


          <div className='d-flex justify-content-around align-items-center h5 border-bottom border-dark row'>

            <p> Profile </p>
            <p> User Name </p>
            <p> Email id </p>
            <p> Invested </p>

          </div>
          
          {userData.map((card,index)=>{
             return <UserCard
                cardId = {index}
                key = {index}
                user = {card}
             /> 
          })}

        </div>

      </div>

    </div>
    </>
  )
}

export default User
