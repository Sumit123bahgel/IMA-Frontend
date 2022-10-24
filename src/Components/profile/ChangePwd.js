import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';


const ChangePwd = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      
      <div className='changePwd d-flex justify-content-center align-items-center flex-column'>
        <h1>Change Your Password</h1>

        <div className='my-3 w-50'>
          <label htmlFor="oldpwd">Old Password</label>
          <input type="password" name="oldPwd" className='form-control' placeholder='Enter Your Old Password'/>
        </div>

        <div className='my-3 w-50'>
          <label htmlFor="newpwd">New Password</label>
          <input type="password" name="newPwd" className='form-control' placeholder='Enter Your New Password'/>
        </div>

        <div className="my-3 w-50">
          <button className='btn btn-primary btn-lg m-3' onClick={()=> navigate(-1)}>Update Password</button>
          <button className='btn btn-secondary btn-lg m-3' onClick={()=> navigate(-1)}>Cancel</button>
        </div>

      </div>

    </>
  )
}

export default ChangePwd
