import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';


const EditProfile = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <Navbar/>
    
    <div className='editProfile p-3'>
            <h1 className='text-center'>Edit Your Profile</h1>

              <div className='form-group'>
                <label htmlFor="plan_name">Your Name</label>
                <input type="text" className='form-control' placeholder='Enter your name' required/>
              </div>

              <div className='form-group'>
                <label htmlFor="deposit">Email id</label>
                <input type="email" className='form-control' name='email' placeholder='Enter your valid email' required/>
              </div>

              <div className='form-group'>
                <label htmlFor="period">Phone</label>
                <input type="number" className='form-control' name='phone' placeholder='Enter your phone number' required/>
              </div>

              <button className='btn btn-primary' onClick={()=> navigate(-1)}>Submit</button>
            
        </div> 
    </>
  )
}

export default EditProfile
