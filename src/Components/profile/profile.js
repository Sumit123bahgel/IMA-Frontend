import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';

import data from './data.js';


const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>

    <div className='profile d-flex justify-content-center align-items-center flex-column p-3'>

        <h1 className='mb-5'>Your Profile</h1>

        <div className='d-flex justify-content-center align-items-center flex-lg-row flex-column p-3 w-100'>
          <img src={data.img} alt="img" className='rounded-lg' style={{width : '200px'}}/>
          <div className='h5 text-primary m-5'>
            <p> Name : <span className='text-success'> {data.name} </span> </p>
            <p> Email id : <span className='text-success'> {data.email} </span></p>
            <p> Phone : <span className='text-success'> {data.phone} </span> </p>
            <p> Password : <span className='text-success'> {data.password} </span></p>
          </div>
        </div>

      <div className='w-100 text-center'>

        <button type="button" className="btn btn-primary btn-lg m-3" onClick={()=> navigate('/update_profile')} >Edit Profile</button>
        
        <button type="button" className="btn btn-secondary btn-lg m-3" onClick={()=> navigate('/change_password')}>Change Password</button>
        
      </div>


    </div>

    </>
  )
}

export default Profile
